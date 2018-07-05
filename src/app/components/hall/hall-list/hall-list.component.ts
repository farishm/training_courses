import { Component, OnInit } from '@angular/core';
import { Hall } from '../../../models/hall';
import { HallService } from '../../../services/hall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})

export class HallListComponent implements OnInit {
  halls: Hall[];
  selectedHall: Hall;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private hallService: HallService) { }

  getHalls(): void {
     this.hallService.getHalls()
    .subscribe(halls => this.halls = halls);
  }

delete(): void {
  this.halls = this.halls.filter(c => c !== this.selectedHall);
  this.hallService.deleteHall(this.selectedHall).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getHalls();
  }

  gotoView(hall: Hall): void {
    this.selectedHall = hall;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onSelect(hall: Hall): void {
    this.selectedHall = hall;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }
  
  onDelete(hall: Hall): void {
    this.selectedHall = hall;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addHall']);
  }

  gotoEdit(hall: Hall): void {
    this.selectedHall = hall;
    this.router.navigate(['/editHall', this.selectedHall.id]);
  }

  gotoDetail(hall: Hall): void {    
    this.router.navigate(['/detailHall', this.selectedHall.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  }  
}