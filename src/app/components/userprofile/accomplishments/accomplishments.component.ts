import { Component, OnInit, Input } from '@angular/core';
import { Accumplishments, Hubbies } from 'src/app/models/user';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {
  dropd=false
  @Input() title: string;
  @Input() hubbies: Hubbies;
  @Input() accumplishments: Accumplishments[];


  constructor() { }

  ngOnInit(): void {
  }

  dropdevent(){
       this.dropd = !this.dropd;
  }

}
