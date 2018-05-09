import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { courseStatuses }        from '../../../models/training-courses-data';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  course: Course;
  courseExists: boolean;
  referenceExists: boolean;
  courseStatuses=courseStatuses;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.course= new Course();
    this.courseExists=false;   
  }

  save(): void {
    this.course.title = this.course.title.trim();
  if (!this.course.title) { return; }
  if(this.course.title=="EXISTS"){
    this.courseExists=true;
  }
  else{
      this.courseService.addCourse(this.course)
    .subscribe(() => this.goBack());
  }
  
  }

   get diagnostic() { return JSON.stringify(this.course); }

  //add(title: string,description: string,reference: string,duration: number,fees: number,status: string,location: string,totalplaces: number,availableplaces: number): void {
  //title = title.trim();
  //if (!title) { return; }
  //this.courseService.create(title,description,reference,duration,fees,status,location,totalplaces,availableplaces)
    //.then(() => this.goBack());
//}


  goBack(): void {
    this.location.back();
  }
}
