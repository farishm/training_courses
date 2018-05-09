import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-eventlog',
  templateUrl: './eventlog.component.html',
  styleUrls: ['./eventlog.component.css']
})
export class EventlogComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}