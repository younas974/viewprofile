import { Component, OnInit, Input } from '@angular/core';
import { Degrees, Education } from '../../../models/user';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() title: string;
  @Input() education: Degrees[];
  constructor() { }

  ngOnInit(): void {

  }

}
