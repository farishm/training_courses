import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-training-courses-api.service';
import { CourseService }          from './services/course.service';
import { SeminarService }          from './services/seminar.service';
import { CollegeService }          from './services/college.service';
import { VenueService }          from './services/venue.service';
import { HallService }          from './services/hall.service';
import { StudentService }          from './services/student.service';
import { InstructorService }          from './services/instructor.service';
import { MemberService } from './services/member.service';
import { UserService } from './services/user.service';
import { MessageService }          from './services/message.service';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseAddComponent } from './components/course/course-add/course-add.component';
import { CourseEditComponent } from './components/course/course-edit/course-edit.component';
import { CourseSearchComponent } from './components/course/course-search/course-search.component';
import { SeminarListComponent } from './components/seminar/seminar-list/seminar-list.component';
import { SeminarDetailComponent } from './components/seminar/seminar-detail/seminar-detail.component';
import { SeminarAddComponent } from './components/seminar/seminar-add/seminar-add.component';
import { SeminarEditComponent } from './components/seminar/seminar-edit/seminar-edit.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { EventlogComponent } from './components/eventlog/eventlog.component';
import { AddressComponent } from './components/shared/address/address.component';
import { PhoneComponent } from './components/shared/phone/phone.component';
import { VenueEditComponent } from './components/venue/venue-edit/venue-edit.component';
import { VenueListComponent } from './components/venue/venue-list/venue-list.component';
import { VenueDetailComponent } from './components/venue/venue-detail/venue-detail.component';
import { HallListComponent } from './components/hall/hall-list/hall-list.component';
import { HallEditComponent } from './components/hall/hall-edit/hall-edit.component';
import { HallDetailComponent } from './components/hall/hall-detail/hall-detail.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add.component';
import { InstructorEditComponent } from './components/instructor/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './components/instructor/instructor-detail/instructor-detail.component';
import { CollegeListComponent } from './components/college/college-list/college-list.component';
import { CollegeEditComponent } from './components/college/college-edit/college-edit.component';
import { CollegeDetailComponent } from './components/college/college-detail/college-detail.component';
import { UsersComponent } from './components/user/users/users.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [AppComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseSearchComponent,
    SeminarDetailComponent,
    SeminarEditComponent,
    SeminarListComponent,
    SeminarAddComponent,
    DashboardComponent,
    StudentAddComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentListComponent,
    EventlogComponent,
    AddressComponent,
    PhoneComponent,
    VenueEditComponent,
    VenueListComponent,
    VenueDetailComponent,
    HallListComponent,
    HallEditComponent,
    HallDetailComponent,
    InstructorAddComponent,
    InstructorEditComponent,
    InstructorListComponent,
    InstructorDetailComponent,
    CollegeListComponent,
    CollegeEditComponent,
    CollegeDetailComponent,
    UsersComponent
  ],
  providers: [ CourseService, SeminarService, CollegeService, VenueService, HallService, InstructorService,StudentService, MessageService, UserService, MemberService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

