import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { venueStatuses,counties }        from '../../../models/training-courses-data';
import { Venue } from '../../../models/venue';
import { VenueService } from '../../../services/venue.service';

@Component({
  selector: 'app-venue-edit',
  templateUrl: './venue-edit.component.html',
  styleUrls: ['./venue-edit.component.css']
})
export class VenueEditComponent implements OnInit {
  venue: Venue;
  venueStatuses=venueStatuses;
  title:string;
  id:number;

  venueForm: FormGroup;
  constructor(
    private venueService: VenueService,
    private route: ActivatedRoute,
    private location: Location    
  ) {
    this.createForm();
  }

  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id > 0)
    {
      this.title="Edit Venue";
      this.venueService.getVenue(this.id).subscribe(venue => {this.venue = venue;this.resetForm();});   
    }
    else
    {
      this.title="Add new Venue";
      this.venue= new Venue();
    }

    console.log(this.title);
  }

  createForm(): void{
    this.venueForm =  new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    description: new FormControl(),
    number: new FormControl(),
    reference: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    capacity: new FormControl(),
    status: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({
      line1: new FormControl(),
      city: new FormControl(),
      county: new FormControl(),
         
      postcode: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])? [0-9][a-zA-Z]{2}$')])
    })
  });
  }

  resetForm(): void{
    console.log(this.venue);

    this.venueForm.reset({
      //id: this.venue.id,
      name: this.venue.name,
      description: this.venue.description,
      number: this.venue.number,
      reference: this.venue.reference,
      capacity: this.venue.capacity,
      status: this.venue.status,
      email: this.venue.email,
      phone: this.venue.phone
      //,line1: this.venue.line1,
      //city: this.venue.city,
      //county: this.venue.county,
      //postcode: this.venue.postcode
    });  

    
    this.venueForm.controls['address'].setValue({
      line1: this.venue.line1, 
      city: this.venue.city,
      county: this.venue.county,
      postcode: this.venue.postcode
    });  
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   console.log(this.venueForm.value);
   console.log(this.venue);

   const formModel = this.venueForm.value;

   this.venue.name=formModel.name;
   this.venue.description=formModel.description;
   this.venue.reference=formModel.reference;
   this.venue.capacity=formModel.capacity;
   this.venue.status=formModel.status;
   this.venue.phone=formModel.phone;
   this.venue.line1=formModel.address.line1;
   this.venue.city=formModel.address.city;
   this.venue.county=formModel.address.county;
   this.venue.postcode=formModel.address.postcode;

   
   if(this.id > 0)
   {
      //Update
       this.venueService.updateVenue(this.venue)
      .subscribe(() => this.goBack());
      
    }
    else
    {      
      //Add
      this.venueService.addVenue(this.venue)
      .subscribe(() => this.goBack());
    } 
  }
}