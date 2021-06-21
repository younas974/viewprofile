import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verifyprofileprogress',
  templateUrl: './verifyprofileprogress.component.html',
  styleUrls: ['./verifyprofileprogress.component.css']
})
export class VerifyprofileprogressComponent implements OnInit {

  @Input() max: number;
  @Input() rate: number;
  maxx :number[]
  b: number;

  constructor() {

  }

  ngOnInit(): void {
    this.maxx = Array(this.max).fill(1).map((x,i)=>i); // [0,1,2,3,4]
    this.b = Math.floor(this.rate)

  }

}
