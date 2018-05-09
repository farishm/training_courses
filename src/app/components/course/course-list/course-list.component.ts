import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private courseService: CourseService) { }

  getCourses(): void {
     this.courseService.getCourses()
    .subscribe(courses => this.courses = courses);
  }

delete(): void {
  this.courses = this.courses.filter(c => c !== this.selectedCourse);
  this.courseService.deleteCourse(this.selectedCourse).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getCourses();
  }

  gotoView(course: Course): void {
    this.selectedCourse = course;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }
  
  onDelete(course: Course): void {
    this.selectedCourse = course;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addCourse']);
  }

  gotoEdit(course: Course): void {
    this.selectedCourse = course;
    this.router.navigate(['/editCourse', this.selectedCourse.id]);
  }

  gotoDetail(course: Course): void {    
    this.router.navigate(['/detailCourse', this.selectedCourse.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  }  
}