import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})

@Component({
  moduleId: module.id,
  selector: 'my-course-detail',
  templateUrl: 'course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
  course: Course;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {}

   ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  edit(): void {
   this.router.navigate(['/editCourse', this.course.id]);
}


  goBack(): void {
    this.location.back();
  }
}
