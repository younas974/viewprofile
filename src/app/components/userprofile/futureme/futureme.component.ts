import { Component, OnInit, Input } from '@angular/core';
import { FutureMe } from '../../../models/user';

@Component({
  selector: 'app-futureme',
  templateUrl: './futureme.component.html',
  styleUrls: ['./futureme.component.css']
})
export class FuturemeComponent implements OnInit {

  @Input() title: string;
  @Input() futureme: FutureMe[];


  constructor() { }

  ngOnInit(): void {

  }

}
