import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { phoneTypes }        from '../../../models/training-courses-data';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  phoneTypes = phoneTypes;
  @Input('phoneGroup')
  public phoneForm: FormGroup;  
  constructor() { }

  ngOnInit() {
  }

}
