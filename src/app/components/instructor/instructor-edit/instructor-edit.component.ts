import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormArray, FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Instructor }        from '../../../models/instructor';
import { titles }        from '../../../models/training-courses-data';
import { InstructorService } from '../../../services/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  instructor: Instructor;
  instructorForm: FormGroup;
  titles = titles;

  constructor(private fb: FormBuilder,
    private instructorService: InstructorService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getInstructor();    
  }

  getInstructor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.instructorService.getInstructor(id)
     // .subscribe(st => console.log(st));
        .subscribe(st => {this.instructor = st; this.resetForm();});
      console.log(this.instructor);
  }

  resetForm() {
    console.log(this.instructor);

    //this.instructorForm.setValue({
    this.instructorForm.reset({
      id: this.instructor.id,
      title: this.instructor.title,
      firstName: this.instructor.firstName,
      lastName: this.instructor.lastName,
      email: this.instructor.email,
      phone: this.instructor.phone
    });

    this.instructorForm.controls['address'].setValue({
      line1: this.instructor.line1, 
      city: this.instructor.city,
      county: this.instructor.county,
      postcode: this.instructor.postcode
    }); 
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
    this.instructorService.updateInstructor(this.instructor).subscribe(/* error handling */);
    this.router.navigate(['/instructors']);
  }

  prepareSaveInstructor(): Instructor {
    const formModel = this.instructorForm.value;

    const saveInstructor: Instructor = {
      id: this.instructor.id,
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
