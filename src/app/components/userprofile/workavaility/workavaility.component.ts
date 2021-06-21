import { Component, OnInit, Input } from '@angular/core';
import { WorkAvailability } from 'src/app/models/user';

@Component({
  selector: 'app-workavaility',
  templateUrl: './workavaility.component.html',
  styleUrls: ['./workavaility.component.css']
})
export class WorkavailityComponent implements OnInit {
  @Input() workavailibility: WorkAvailability;
  constructor() { }

  ngOnInit(): void {
  }

}
