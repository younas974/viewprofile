import { Component, OnInit, Input } from '@angular/core';
import { ContactDetail } from 'src/app/models/user';

@Component({
  selector: 'app-contantdetails',
  templateUrl: './contantdetails.component.html',
  styleUrls: ['./contantdetails.component.css']
})
export class ContantdetailsComponent implements OnInit {

  @Input() contactDetails: ContactDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
