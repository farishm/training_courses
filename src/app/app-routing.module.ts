import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseAddComponent } from './components/course/course-add/course-add.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { CourseSearchComponent } from './components/course/course-search/course-search.component';
import { VenueListComponent } from './components/venue/venue-list/venue-list.component';
import { VenueDetailComponent } from './components/venue/venue-detail/venue-detail.component';
import { VenueEditComponent } from './components/venue/venue-edit/venue-edit.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventlogComponent } from './components/eventlog/eventlog.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'courses',     component: CourseListComponent },
  { path: 'addCourse',     component: CourseAddComponent },
  { path: 'editCourse/:id', component: CourseEditComponent },
  { path: 'detailCourse/:id', component: CourseDetailComponent },  
  { path: 'venues',     component: VenueListComponent },
  { path: 'addVenue',     component: VenueEditComponent },
  { path: 'editVenue/:id', component: VenueEditComponent },
  { path: 'detailVenue/:id', component: VenueDetailComponent },
  { path: 'students',     component: StudentListComponent },
  { path: 'addStudent',     component: StudentAddComponent },
  { path: 'editStudent/:id', component: StudentEditComponent },
  { path: 'detailStudent/:id', component: StudentDetailComponent },
  { path: 'eventlog',     component: EventlogComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}