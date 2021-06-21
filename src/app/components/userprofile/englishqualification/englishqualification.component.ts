import { Component, OnInit, Input } from '@angular/core';
import { EnglishQualification } from 'src/app/models/user';

@Component({
  selector: 'app-englishqualification',
  templateUrl: './englishqualification.component.html',
  styleUrls: ['./englishqualification.component.css']
})
export class EnglishqualificationComponent implements OnInit {
  @Input() englishqualification: EnglishQualification[];
  constructor() { }

  ngOnInit(): void {

  }

}
