import { Component, OnInit } from '@angular/core';
import { College } from '../../../models/college';
import { CollegeService } from '../../../services/college.service';
import { Router } from '@angular/router';

@Component({
  selector: 'college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})

export class CollegeListComponent implements OnInit {
  colleges: College[];
  selectedCollege: College;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private collegeService: CollegeService) { }

  getColleges(): void {
     this.collegeService.getColleges()
    .subscribe(colleges => this.colleges = colleges);
  }

delete(): void {
  this.colleges = this.colleges.filter(c => c !== this.selectedCollege);
  this.collegeService.deleteCollege(this.selectedCollege).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getColleges();
  }

  gotoView(college: College): void {
    this.selectedCollege = college;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onSelect(college: College): void {
    this.selectedCollege = college;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }
  
  onDelete(college: College): void {
    this.selectedCollege = college;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addCollege']);
  }

  gotoEdit(college: College): void {
    this.selectedCollege = college;
    this.router.navigate(['/editCollege', this.selectedCollege.id]);
  }

  gotoDetail(college: College): void {    
    this.router.navigate(['/detailCollege', this.selectedCollege.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  }  
}