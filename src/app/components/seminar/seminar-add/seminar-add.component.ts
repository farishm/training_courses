import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { seminarStatuses }        from '../../../models/training-courses-data';
import { Seminar } from '../../../models/seminar';
import { SeminarService } from '../../../services/seminar.service';

@Component({
  selector: 'app-seminar-add',
  templateUrl: './seminar-add.component.html',
  styleUrls: ['./seminar-add.component.css']
})
export class SeminarAddComponent implements OnInit {
  seminar: Seminar;
  seminarExists: boolean;
  referenceExists: boolean;
  seminarStatuses=seminarStatuses;

  constructor(
    private seminarService: SeminarService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.seminar= new Seminar();
    this.seminarExists=false;   
  }

  save(): void {
    this.seminar.title = this.seminar.title.trim();
  if (!this.seminar.title) { return; }
  if(this.seminar.title=="EXISTS"){
    this.seminarExists=true;
  }
  else{
      this.seminarService.addSeminar(this.seminar)
    .subscribe(() => this.goBack());
  }
  
  }

   get diagnostic() { return JSON.stringify(this.seminar); }

  //add(title: string,description: string,reference: string,duration: number,fees: number,status: string,location: string,totalplaces: number,availableplaces: number): void {
  //title = title.trim();
  //if (!title) { return; }
  //this.seminarService.create(title,description,reference,duration,fees,status,location,totalplaces,availableplaces)
    //.then(() => this.goBack());
//}


  goBack(): void {
    this.location.back();
  }
}
