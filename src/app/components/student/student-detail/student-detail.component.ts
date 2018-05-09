import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Student, Address, Phone }        from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getStudent();    
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.studentService.getStudent(id)
     // .subscribe(st => console.log(st));
        .subscribe(st => this.student = st);
      console.log(this.student);
  }

  edit(): void {
   this.router.navigate(['/editStudent', this.student.id]);
}

  goBack(): void {
    this.router.navigate(['/students']);
    //this.location.back();
  }
  
}
