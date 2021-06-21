import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  active: string='User';
  constructor() { }

  ngOnInit(): void {
  }


  activeClass(param: any){
      this.active=param;
  }


}
