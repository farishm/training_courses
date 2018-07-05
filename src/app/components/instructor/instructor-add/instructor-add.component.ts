import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormArray, FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Instructor}        from '../../../models/instructor';
import { titles, levels }        from '../../../models/training-courses-data';
import { InstructorService } from '../../../services/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css']
})
export class InstructorAddComponent implements OnInit {
  instructor: Instructor;
  instructorForm: FormGroup;
  titles = titles;
  levels = levels;

  constructor(private fb: FormBuilder,
    private instructorService: InstructorService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.createForm();
  }
  
  ngOnInit(): void {   
  }  

 createForm() {
    this.instructorForm = this.fb.group({
     id: [''],
      title: ['', Validators.required ],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required , Validators.minLength(2)]],
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
    this.instructor = this.prepareSaveInstructor();
    this.instructorService.addInstructor(this.instructor).subscribe(/* error handling */);
    this.router.navigate(['/instructors']);
  }

  prepareSaveInstructor(): Instructor {
    const formModel = this.instructorForm.value;

    const saveInstructor: Instructor = {
      id:  undefined,
      title: formModel.title as string,
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      email: formModel.email as string,
      phone: formModel.phone as string,
      line1: formModel.address as string,
      city: formModel.address.city as string,
      county:formModel.address.county as string,
      postcode:formModel.address.postcode as string
    };
    return saveInstructor;
  }

  goBack(): void {
    this.router.navigate(['/instructors']);
    //this.location.back();
  }

}
