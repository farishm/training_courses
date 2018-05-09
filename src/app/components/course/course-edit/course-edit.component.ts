import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { courseStatuses }        from '../../../models/training-courses-data';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course: Course;
  courseStatuses=courseStatuses;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  
  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
    //console.log(this.course);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.courseService.updateCourse(this.course)
      .subscribe(() => this.goBack());
  }
}
