import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { Seminar } from '../../../models/seminar';
import { SeminarService } from '../../../services/seminar.service';

@Component({
  selector: 'app-seminar-detail',
  templateUrl: './seminar-detail.component.html',
  styleUrls: ['./seminar-detail.component.css']
})

@Component({
  moduleId: module.id,
  selector: 'my-seminar-detail',
  templateUrl: 'seminar-detail.component.html'
})
export class SeminarDetailComponent implements OnInit {
  seminar: Seminar;

  constructor(
    private seminarService: SeminarService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {}

   ngOnInit(): void {
    this.getSeminar();
  }

  getSeminar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seminarService.getSeminar(id)
      .subscribe(seminar => this.seminar = seminar);
  }

  edit(): void {
   this.router.navigate(['/editSeminar', this.seminar.id]);
}


  goBack(): void {
    this.location.back();
  }
}
