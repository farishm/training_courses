import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseAddComponent } from './components/course/course-add/course-add.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { CourseSearchComponent } from './components/course/course-search/course-search.component';
import { SeminarListComponent } from './components/seminar/seminar-list/seminar-list.component';
import { SeminarDetailComponent } from './components/seminar/seminar-detail/seminar-detail.component';
import { SeminarAddComponent } from './components/seminar/seminar-add/seminar-add.component';
import { SeminarEditComponent } from './components/seminar/seminar-edit/seminar-edit.component';
import { CollegeListComponent } from './components/college/college-list/college-list.component';
import { CollegeDetailComponent } from './components/college/college-detail/college-detail.component';
import { CollegeEditComponent } from './components/college/college-edit/college-edit.component';
import { VenueListComponent } from './components/venue/venue-list/venue-list.component';
import { VenueDetailComponent } from './components/venue/venue-detail/venue-detail.component';
import { VenueEditComponent } from './components/venue/venue-edit/venue-edit.component';
import { HallListComponent } from './components/hall/hall-list/hall-list.component';
import { HallDetailComponent } from './components/hall/hall-detail/hall-detail.component';
import { HallEditComponent } from './components/hall/hall-edit/hall-edit.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './components/instructor/instructor-detail/instructor-detail.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add.component';
import { InstructorEditComponent } from './components/instructor/instructor-edit/instructor-edit.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventlogComponent } from './components/eventlog/eventlog.component';
import { UsersComponent } from './components/user/users/users.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'courses',     component: CourseListComponent },
  { path: 'addCourse',     component: CourseAddComponent },
  { path: 'editCourse/:id', component: CourseEditComponent },
  { path: 'detailCourse/:id', component: CourseDetailComponent }, 
  { path: 'seminars',     component: SeminarListComponent },
  { path: 'addSeminar',     component: SeminarAddComponent },
  { path: 'editSeminar/:id', component: SeminarEditComponent },
  { path: 'detailSeminar/:id', component: SeminarDetailComponent }, 
  { path: 'colleges',     component: CollegeListComponent },
  { path: 'addCollege',     component: CollegeEditComponent },
  { path: 'editCollege/:id', component: CollegeEditComponent },
  { path: 'detailCollege/:id', component: CollegeDetailComponent }, 
  { path: 'venues',     component: VenueListComponent },
  { path: 'addVenue',     component: VenueEditComponent },
  { path: 'editVenue/:id', component: VenueEditComponent },
  { path: 'detailVenue/:id', component: VenueDetailComponent },
  { path: 'halls',     component: HallListComponent },
  { path: 'addHall',     component: HallEditComponent },
  { path: 'editHall/:id', component: HallEditComponent },
  { path: 'detailHall/:id', component: HallDetailComponent },
  { path: 'instructors',     component: InstructorListComponent },
  { path: 'addInstructor',     component: InstructorAddComponent },
  { path: 'editInstructor/:id', component: InstructorEditComponent },
  { path: 'detailInstructor/:id', component: InstructorDetailComponent },
  { path: 'students',     component: StudentListComponent },
  { path: 'addStudent',     component: StudentAddComponent },
  { path: 'editStudent/:id', component: StudentEditComponent },
  { path: 'detailStudent/:id', component: StudentDetailComponent },
  { path: 'eventlog',     component: EventlogComponent },
  { path: 'users',     component: UsersComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}