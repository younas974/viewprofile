import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userinterests',
  templateUrl: './interestedcontries.component.html',
  styleUrls: ['./interestedcontries.component.css']
})
export class InterestedcontriesComponent implements OnInit {

  @Input() title: string;
  @Input() data: [];


  constructor() { }

  ngOnInit(): void {
  }

}
