import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { seminarStatuses }        from '../../../models/training-courses-data';
import { Seminar } from '../../../models/seminar';
import { SeminarService } from '../../../services/seminar.service';

@Component({
  selector: 'app-seminar-edit',
  templateUrl: './seminar-edit.component.html',
  styleUrls: ['./seminar-edit.component.css']
})
export class SeminarEditComponent implements OnInit {
  seminar: Seminar;
  seminarStatuses=seminarStatuses;

  constructor(
    private seminarService: SeminarService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  
  ngOnInit(): void {
    this.getSeminar();
  }

  getSeminar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seminarService.getSeminar(id)
      .subscribe(seminar => this.seminar = seminar);
    //console.log(this.seminar);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.seminarService.updateSeminar(this.seminar)
      .subscribe(() => this.goBack());
  }
}
