import { Component } from '@angular/core';
import { User, FutureMe } from './models/user';
import { UserService } from './services/user.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'test';
  bgimg:any = "https://pbs.twimg.com/profile_banners/50988711/1384539792/600x200";
  files: File[]=[];
  file: any[]=[];
  url: any;
  user: User


  intcont: any[]=[{
    img: "/assets/imgs/profilephoto.jpg",
    title: "Photography"
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "Swiming"
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "Booking"
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "Music"
  },{
    img: "/assets/imgs/profilephoto.jpg",
    title: "Vedio Games"
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "Bowling"
  },
]

  intcontf: any[]=[{
    img: "/assets/imgs/profilephoto.jpg",
    title: "United "
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "United "
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "United "
  },
  {
    img: "/assets/imgs/profilephoto.jpg",
    title: "United"
  }]

  constructor(private _user: UserService){

  }

  ngOnInit(): void {
    this.getUserData();

}

  uploadFile(event) {

    this.files = event.target.files;
    this.file.push(this.files[0])
    console.log(this.file)
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      this.bgimg=this.url;
      this.user.coverphoto=this.url
    }

  }

  getUserData(){
    this._user.getPersonalInfo().subscribe(res=>{

      this.user=res
      console.log("below is the user")
      console.log(this.user)



    },error=>{
      console.log(error)
    })
  }


  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }




}
