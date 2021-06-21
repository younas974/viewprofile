import { Component, OnInit, Input } from '@angular/core';
import { MyDoc } from 'src/app/models/user';

@Component({
  selector: 'app-mydoc',
  templateUrl: './mydoc.component.html',
  styleUrls: ['./mydoc.component.css']
})
export class MydocComponent implements OnInit {

  @Input() myDoc: MyDoc;
  constructor() { }

  ngOnInit(): void {
  }

  iconList = [ // array of icon class list based on type
    { type: "xlsx", icon: "fa fa-file-excel-o" },
    { type: "pdf", icon: "/assets/icons/pdf.svg" },
    { type: "png", icon: "./../../../../assets/icons/img.svg" },
    { type: "jpg", icon: "./../../../../assets/icons/img.svg" },
    { type: "jpeg", icon: "./../../../../assets/icons/img.svg" },
    { type: "doc", icon: "./../../../../assets/icons/doc.svg" }

  ];


  getFileExtension(filename) { // this will give you icon class name
    let ext = filename.split(".").pop();
    let obj = this.iconList.filter(row => {
      if (row.type === ext) {
        return true;
      }
    });
    if (obj.length > 0) {
      let icon = obj[0].icon;
      console.log(icon)
      return icon;
    } else {
      return "";
    }
  }

}
