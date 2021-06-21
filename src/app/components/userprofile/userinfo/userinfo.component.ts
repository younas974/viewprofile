import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user: User;
  active: string='Profile';

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this.getUserData();

}

  getUserData(){
    this._user.getPersonalInfo().subscribe(res=>{
      console.log(res)
      this.user=res
      console.log(this.user)
    },error=>{
      console.log(error)
    })
  }
  activeClass(param: any){
    console.log(" i am clicked")
    console.log(param)
      this.active=param;
      console.log(this.active)
  }


}
