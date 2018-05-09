import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormArray, FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Student, Address, Phone }        from '../../../models/student';
import { titles, levels }        from '../../../models/training-courses-data';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student;
  studentForm: FormGroup;
  titles = titles;
  levels = levels;

  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    this.createForm();
  }
  
  ngOnInit(): void {   
  }  

  createForm() {
    this.studentForm = this.fb.group({
      id: [''],
      title: ['', Validators.required ],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required , Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      addressList: this.fb.array([]), 
      phoneList: this.fb.array([]), 
      level: ['', Validators.required ],
      agreedTerms: ['', Validators.required ]
    });
  }

  get addressList(): FormArray {
    return this.studentForm.get('addressList') as FormArray;
  };

  get phoneList(): FormArray {
    return this.studentForm.get('phoneList') as FormArray;
  };
  
  /*
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.studentForm.setControl('addressList', addressFormArray);
  }

   setPhones(phones: Phone[]) {
    const phoneFGs = phones.map(phone => this.fb.group(phone));
    const phoneFormArray = this.fb.array(phoneFGs);
    this.studentForm.setControl('phoneList', phoneFormArray);
  }

  */

  addAddress() {
    this.addressList.push(this.fb.group(
      {
        type: ['', Validators.required ],
        line1: ['', Validators.required ],
        city: [''],
        postcode: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])? [0-9][a-zA-Z]{2}$')]],        
        county: ['']
      }
    ));
  }

  addPhone() {
    this.phoneList.push(this.fb.group(
      {
        type: ['', Validators.required ],
        number : ['', [Validators.required, Validators.pattern('^(?=.*[0-9])[- +()0-9]+$')]],
      }
    ));
  }

  save() {
    console.log(this.studentForm.controls.phoneList.value);
    this.student = this.prepareSaveStudent();
    this.studentService.addStudent(this.student).subscribe(/* error handling */);
    this.router.navigate(['/students']);
  }

  prepareSaveStudent(): Student {
    const formModel = this.studentForm.value;

    // deep copy of address
    const addressListDeepCopy: Address[] = formModel.addressList.map(
      (address: Address) => Object.assign({}, address)
    );

    // deep copy of phone
    const phoneListDeepCopy: Phone[] = formModel.phoneList.map(
      (phone: Phone) => Object.assign({}, phone)
    );

    // return new Student object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveStudent: Student = {
      id: undefined,
      title: formModel.title as string,
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      email: formModel.email as string,
      level: formModel.level as string,
      agreedTerms: formModel.agreedTerms as string,

      // addresses: formModel.addressList // <-- bad!
      addresses: addressListDeepCopy,

      phones: phoneListDeepCopy
    };
    return saveStudent;
  }

  //revert() { this.ngOnChanges(); }

  removeAddress(i: number) {
    if(confirm("Are you sure to delete the selected address?")) {
      const control = <FormArray>this.studentForm.controls['addressList'];
      control.removeAt(i);
    }        
  }

  removePhone(i: number) {
    if(confirm("Are you sure to delete the selected phone?")) {
      const control = <FormArray>this.studentForm.controls['phoneList'];
      control.removeAt(i);
    }   
  }

  goBack(): void {
    this.router.navigate(['/students']);
    //this.location.back();
  }

   //get number() { console.log(this.studentForm.controls.phoneList);
     
     //return this.studentForm.controls.phoneList.controls.number; }

}