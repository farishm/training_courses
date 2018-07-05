import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { hallStatuses,counties }        from '../../../models/training-courses-data';
import { Hall } from '../../../models/hall';
import { HallService } from '../../../services/hall.service';

@Component({
  selector: 'app-hall-edit',
  templateUrl: './hall-edit.component.html',
  styleUrls: ['./hall-edit.component.css']
})
export class HallEditComponent implements OnInit {
  hall: Hall;
  hallStatuses=hallStatuses;
  title:string;
  id:number;

  hallForm: FormGroup;
  constructor(
    private hallService: HallService,
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
      this.title="Edit Hall";
      this.hallService.getHall(this.id).subscribe(hall => {this.hall = hall;this.resetForm();});   
    }
    else
    {
      this.title="Add new Hall";
      this.hall= new Hall();
    }

    console.log(this.title);
  }

  createForm(): void{
    this.hallForm =  new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)],),
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
    },{ updateOn: 'submit' })
  },{ updateOn: 'submit' });
  }

  resetForm(): void{
    console.log(this.hall);

    this.hallForm.reset({
      //id: this.hall.id,
      name: this.hall.name,
      description: this.hall.description,
      number: this.hall.number,
      reference: this.hall.reference,
      capacity: this.hall.capacity,
      status: this.hall.status,
      email: this.hall.email,
      phone: this.hall.phone
      //,line1: this.hall.line1,
      //city: this.hall.city,
      //county: this.hall.county,
      //postcode: this.hall.postcode
    });  

    
    this.hallForm.controls['address'].setValue({
      line1: this.hall.line1, 
      city: this.hall.city,
      county: this.hall.county,
      postcode: this.hall.postcode
    });  
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   console.log(this.hallForm.value);
   console.log(this.hall);

   const formModel = this.hallForm.value;

   this.hall.name=formModel.name;
   this.hall.description=formModel.description;
   this.hall.reference=formModel.reference;
   this.hall.capacity=formModel.capacity;
   this.hall.status=formModel.status;
   this.hall.phone=formModel.phone;
   this.hall.line1=formModel.address.line1;
   this.hall.city=formModel.address.city;
   this.hall.county=formModel.address.county;
   this.hall.postcode=formModel.address.postcode;

   
   if(this.id > 0)
   {
      //Update
       this.hallService.updateHall(this.hall)
      .subscribe(() => this.goBack());
      
    }
    else
    {      
      //Add
      this.hallService.addHall(this.hall)
      .subscribe(() => this.goBack());
    } 
  }
}