import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private studentService: StudentService) { }

  getStudents(): void {
     this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }

delete(): void {
  this.students = this.students.filter(c => c !== this.selectedStudent);
  this.studentService.deleteStudent(this.selectedStudent).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getStudents();
  }

  gotoView(student: Student): void {
    this.selectedStudent = student;
    console.log(this.selectedStudent);
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onDelete(student: Student): void {
    this.selectedStudent = student;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addStudent']);
  }

  gotoEdit(student: Student): void {
    this.selectedStudent = student;
    this.router.navigate(['/editStudent', this.selectedStudent.id]);
  }

  gotoDetail(student: Student): void {    
    this.router.navigate(['/detailStudent', this.selectedStudent.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  } 
}