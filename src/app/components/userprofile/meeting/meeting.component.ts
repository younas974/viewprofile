import { Component, OnInit, Input } from '@angular/core';
import { Meeting } from 'src/app/models/user';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  @Input() meeting: Meeting;

  constructor() { }

  ngOnInit(): void {
  }

}
