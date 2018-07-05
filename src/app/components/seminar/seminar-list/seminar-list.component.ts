import { Component, OnInit } from '@angular/core';
import { Seminar } from '../../../models/seminar';
import { SeminarService } from '../../../services/seminar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.css']
})

export class SeminarListComponent implements OnInit {
  seminars: Seminar[];
  selectedSeminar: Seminar;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private seminarService: SeminarService) { }

  getSeminars(): void {
     this.seminarService.getSeminars()
    .subscribe(seminars => this.seminars = seminars);
  }

delete(): void {
  this.seminars = this.seminars.filter(c => c !== this.selectedSeminar);
  this.seminarService.deleteSeminar(this.selectedSeminar).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getSeminars();
  }

  gotoView(seminar: Seminar): void {
    this.selectedSeminar = seminar;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onSelect(seminar: Seminar): void {
    this.selectedSeminar = seminar;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }
  
  onDelete(seminar: Seminar): void {
    this.selectedSeminar = seminar;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addSeminar']);
  }

  gotoEdit(seminar: Seminar): void {
    this.selectedSeminar = seminar;
    this.router.navigate(['/editSeminar', this.selectedSeminar.id]);
  }

  gotoDetail(seminar: Seminar): void {    
    this.router.navigate(['/detailSeminar', this.selectedSeminar.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  }  
}