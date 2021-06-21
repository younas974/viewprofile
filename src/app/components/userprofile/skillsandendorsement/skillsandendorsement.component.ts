import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { SkillsandEndorsement } from 'src/app/models/user';

@Component({
  selector: 'app-skillsandendorsement',
  templateUrl: './skillsandendorsement.component.html',
  styleUrls: ['./skillsandendorsement.component.css']
})
export class SkillsandendorsementComponent implements OnInit {
  @Input() skillsendorsment: SkillsandEndorsement;
  constructor() { }

  ngOnInit(): void {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
