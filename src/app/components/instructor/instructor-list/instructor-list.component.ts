import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../../models/instructor';
import { InstructorService } from '../../../services/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  instructors: Instructor[];
  selectedInstructor: Instructor;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private instructorService: InstructorService) { }

  getInstructors(): void {
     this.instructorService.getInstructors()
    .subscribe(instructors => this.instructors = instructors);
  }

delete(): void {
  this.instructors = this.instructors.filter(c => c !== this.selectedInstructor);
  this.instructorService.deleteInstructor(this.selectedInstructor).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getInstructors();
  }

  gotoView(instructor: Instructor): void {
    this.selectedInstructor = instructor;
    console.log(this.selectedInstructor);
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onDelete(instructor: Instructor): void {
    this.selectedInstructor = instructor;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addInstructor']);
  }

  gotoEdit(instructor: Instructor): void {
    this.selectedInstructor = instructor;
    this.router.navigate(['/editInstructor', this.selectedInstructor.id]);
  }

  gotoDetail(instructor: Instructor): void {    
    this.router.navigate(['/detailInstructor', this.selectedInstructor.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  } 
}
