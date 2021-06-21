import { Component, OnInit, Input } from '@angular/core';
import { VerifyProfile } from 'src/app/models/user';

@Component({
  selector: 'app-verifyprofile',
  templateUrl: './verifyprofile.component.html',
  styleUrls: ['./verifyprofile.component.css']
})
export class VerifyprofileComponent implements OnInit {
  @Input() verifyprofile: VerifyProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
