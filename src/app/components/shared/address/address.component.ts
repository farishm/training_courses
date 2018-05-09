import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addressTypes, counties }        from '../../../models/training-courses-data';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressTypes = addressTypes;
  counties = counties;
  @Input('addressGroup')
  public adressForm: FormGroup;  
  constructor() { }

  ngOnInit() {
  }

}
