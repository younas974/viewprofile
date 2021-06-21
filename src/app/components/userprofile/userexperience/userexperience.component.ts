import { Component, OnInit, Input } from '@angular/core';
import { WorkExp } from 'src/app/models/user';

@Component({
  selector: 'app-userexperience',
  templateUrl: './userexperience.component.html',
  styleUrls: ['./userexperience.component.css']
})
export class UserexperienceComponent implements OnInit {
  @Input() workexp: WorkExp;
  constructor() { }

  ngOnInit(): void {
  }

}
