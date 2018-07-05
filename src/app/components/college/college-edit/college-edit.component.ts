import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormArray, FormBuilder, FormGroup , Validators} from '@angular/forms';
import { College }        from '../../../models/college';
import { CollegeService } from '../../../services/college.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college-edit',
  templateUrl: './college-edit.component.html',
  styleUrls: ['./college-edit.component.css']
})
export class CollegeEditComponent implements OnInit {
  college: College;
  collegeForm: FormGroup;
  title:string;
  id:number;

  constructor(private fb: FormBuilder,
    private collegeService: CollegeService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getCollege();    
  }

  getCollege(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if(this.id > 0)
    {
      this.title="Edit College";
      this.collegeService.getCollege(this.id).subscribe(st => {this.college = st; this.resetForm();});
      //console.log(this.college);
    }
    else
    {
      this.college= new College();
      this.title="Add new College";
    }
    console.log(this.title);   
  }

  resetForm() {
    console.log(this.college);

    //this.collegeForm.setValue({
    this.collegeForm.reset({
      id: this.college.id,
      name: this.college.name,
      description: this.college.description,
      number: this.college.number,
      reference: this.college.reference,
      capacity: this.college.capacity,
      status: this.college.status,
      email: this.college.email,
      phone: this.college.phone
    });

    this.collegeForm.controls['address'].setValue({
      line1: this.college.line1, 
      city: this.college.city,
      county: this.college.county,
      postcode: this.college.postcode
    }); 
  }

  createForm() {
    this.collegeForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      number: [''],
      reference: ['', [Validators.required, Validators.minLength(10)]],
      capacity: [''],
      status: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])[- +()0-9]+$')]],
      address:this.fb.group({
        line1: ['', [Validators.required, Validators.minLength(2)]],
        city: [],
        county: [],         
        postcode: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])? [0-9][a-zA-Z]{2}$')]]
    })
    });
  }
  

  save() {
    this.college = this.prepareSaveCollege();
    if(this.id > 0)
    {
      //Update
      this.collegeService.updateCollege(this.college).subscribe(() => this.goBack());
    }
    else
    {
       //Add
      this.collegeService.addCollege(this.college)
      .subscribe(() => this.goBack());
    }    
    //this.router.navigate(['/colleges']);
  }

  prepareSaveCollege(): College {
    const formModel = this.collegeForm.value;

    const saveCollege: College = {
      id: (this.id > 0) ? this.college.id: undefined,
      name: formModel.name as string,
      description: formModel.description as string,
      number: formModel.number as Number,
      reference: formModel.reference as string,
      capacity: formModel.capacity as Number,
      status: formModel.email as string,
      email: formModel.email as string,
      phone: formModel.phone as string,
      line1: formModel.address.line1 as string,
      city: formModel.address.city as string,
      county:formModel.address.county as string,
      postcode:formModel.address.postcode as string
    };
    return saveCollege;
  }

  goBack(): void {
    this.router.navigate(['/colleges']);
    //this.location.back();
  }

}
