import { Component, OnInit } from '@angular/core';
import { Venue } from '../../../models/venue';
import { VenueService } from '../../../services/venue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})

export class VenueListComponent implements OnInit {
  venues: Venue[];
  selectedVenue: Venue;
  detailsSelected: boolean = false;
  deleteSelected: boolean = false;

  constructor(
    private router: Router,
    private venueService: VenueService) { }

  getVenues(): void {
     this.venueService.getVenues()
    .subscribe(venues => this.venues = venues);
  }

delete(): void {
  this.venues = this.venues.filter(c => c !== this.selectedVenue);
  this.venueService.deleteVenue(this.selectedVenue).subscribe();
  this.deleteSelected= false;
}



  ngOnInit(): void {
    this.getVenues();
  }

  gotoView(venue: Venue): void {
    this.selectedVenue = venue;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }

  onSelect(venue: Venue): void {
    this.selectedVenue = venue;
    this.detailsSelected= true;
    this.deleteSelected= false;
  }
  
  onDelete(venue: Venue): void {
    this.selectedVenue = venue;
    this.detailsSelected= false;
    this.deleteSelected= true;
  }
  
  gotoAdd(): void {
    this.router.navigate(['/addVenue']);
  }

  gotoEdit(venue: Venue): void {
    this.selectedVenue = venue;
    this.router.navigate(['/editVenue', this.selectedVenue.id]);
  }

  gotoDetail(venue: Venue): void {    
    this.router.navigate(['/detailVenue', this.selectedVenue.id]);
  }
  
  gotoClose(): void {
     this.detailsSelected= false;
  }

  gotoCloseDel(): void {
     this.deleteSelected= false;
  }  
}