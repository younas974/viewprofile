import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import { AboutMeVedios } from 'src/app/models/user';

@Component({
  selector: 'app-aboutmv',
  templateUrl: './aboutmv.component.html',
  styleUrls: ['./aboutmv.component.css']
})
export class AboutmvComponent implements OnInit  {

  @Input() aboutmev: AboutMeVedios[];
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  isplay: boolean=false;
  isplay2: boolean=false;
  isplay3: boolean=false;
  @ViewChildren('vedios') vedios;
  vedioduration: any;
  temp:number;
  timev2: any;
  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      let time =this.vedios.toArray()[0].nativeElement.children[0].children[0].children[2].children[2].duration

      console.log(this.vedios.toArray()[0].nativeElement.children[0].children[0].children[2].children[2].duration)
      this.vedioduration=time;
      this.temp=this.vedios.toArray()[0].nativeElement.children[1].children[0].children[2].children[2].duration
      this.timev2= ((this.temp*60)/100).toFixed(2)
    }, 1000);

  }



  url;
  format;
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.aboutmev.push({
          id:null,
          src: this.url
        })
        console.log(this.aboutmev)
      }
    }
  }

  playVideo(event, isplay, i) {


   let vid= this.vedios.toArray()[0].nativeElement.children[i].children[0].children[2].children[2]
   console.log(vid.duration)
   if(vid.paused) {
    vid.play();



    if(isplay=='isplay'){
      this.isplay=true
    }
    if(isplay=='isplay2'){
      this.isplay2=true
    }
    if(isplay=='isplay3'){
      this.isplay3=true
    }

  }
  else {
    vid.pause();

    if(isplay=='isplay'){
      this.isplay=false
    }
    if(isplay=='isplay2'){
      this.isplay2=false
    }
    if(isplay=='isplay3'){
      this.isplay3=false
    }

  }


 }


  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
}
