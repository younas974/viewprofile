import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/models/user';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  @Input() tests: Test;

  constructor() { }

  ngOnInit(): void {
  }

}
