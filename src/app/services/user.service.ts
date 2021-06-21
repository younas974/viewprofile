import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User;

  getPersonalInfo(): Observable<any> {
  this.user = {
      name: "Mary Watson",
     location: "USA, Arizona",
     profession:"Student",
     followers: 500,
     lookingfor:  [{
       id:1,
       name: 'Addmission'
     },
     {
      id:2,
      name: 'Job'
    },
    {
      id:3,
      name: 'Scholer Ship'
    },],
    habits: [{
       id: 1,
       name: 'Social media scholer'
     },
     {
      id: 2,
      name: 'Life long beer lover'
    },
    {
      id: 3,
      name: 'Toral writer'
    },
    {
      id: 4,
      name: 'Twiter guru'
    },
    ],
     education: {
      studiedat:'University of arizona',
      cgpa: 3.50,
      ielts: 6.5,
      toefl: 540,
      achievments: 'Participate in Tech Talk by Marques at University of Arizona ',
      degrees: [{
        id:1,
        title: "International Baccalaureate",
        school: {
          name: "Garden International School",
          city: "Kuala Lumpur",
          country: "Malaysia",
          logo: "../../assets/icons/graduationintersch.svg"
        },
      tenure: "2011-2013",
      cgpa:4.0,
      studytype: "On Campus ",
      language: "EN"
      },
      {
        id:2,
        title: "Diploma in Science Computer",
        school: {
          name: "Universiti Sains Malaysia",
          city: "Kuala Lumpur",
          country: "Malaysia",
          logo:"../../assets/icons/universisains.svg"
        },
      tenure: "2011-2013",
      cgpa:4.0,
      studytype: "On Campus ",
      language: "EN"
      }]
     },
     coverphoto: "backg.jpg",
     profilephoto:"pf2.jpg",
     futureme:[{
       title: "Jobs",
       items:[{
         id:1,
         name:"Graphic Designer"
       },
       {
        id:2,
        name:"Interior Designer"
      },
      {
        id:3,
        name:"Industrial Designer"
      },
      {
        id:4,
        name:"Business Analyst"
      },
      {
        id:5,
        name:"Aeronautics Engineer"
      }],
      logo:"/assets/icons/job.svg"
     },
     {
      title: "Location",
      items:[{
        id:1,
        name:"Tokyo, Japan"
      },
      {
       id:2,
       name:"Seoul, South Korea "
     },
     {
       id:3,
       name:"Kuala Lumpur, Malaysia "
     },
     {
       id:4,
       name:"Sydney, Australia"
     },
     ],
     logo:"/assets/icons/location.svg"
    },

    {
     title: "Fields",
     items:[{
       id:1,
       name:"Information Technology"
     },
     {
      id:2,
      name:"Business"
    },
    {
      id:3,
      name:"Education "
    },
    {
      id:4,
      name:"Engineering"
    },
    ],
    logo:"/assets/icons/field.svg"
   }],
   aboutMeV:[{
     id:1,
     src: "/assets/vedios/pexels-ron-lach-7354250.mp4"
   },
   {
    id:2,
    src: "/assets/vedios/production ID_4883833.mp4"
  }],
  engQualification: [{
    id: 1,
    title: "TOEFL",
    score: 9.0
  },
  {
    id: 2,
    title: "A-Levels",
    score: 9.0
  },
  {
    id: 3,
    title: "Cambridge English",
    score: 9.0
  }],
  accumplishments: [{
    id: 1,
    title: "Award and Honour"
  },
  {
    id: 2,
    title: "Publications"
  },
  {
    id: 3,
    title: "Patent"
  }],
  hubbies:[{
    id: 1,
    title: "Photography",
    icon: "../../assets/icons/camara.svg"
  },
  {
    id: 2,
    title: "Swimming",
    icon: "../../assets/icons/swiming.svg.png"
  },
  {
    id: 3,
    title: "Boxing",
    icon: "../../assets/icons/boxing.svg"
  },
  {
    id: 4,
    title: "Music",
    icon: "../../assets/icons/music.svg"
  },
  {
    id: 5,
    title: "Video Games",
    icon: "../../assets/icons/vediogamer.svg"
  },{
    id: 6,
    title: "Bowling",
    icon: "../../assets/icons/bowling.png"
  }],
  skillsandendorsment: [{
    id: 1,
    title: "Business Intelligence",
    rating: 0
  },
  {
    id: 2,
    title: "ERP",
    rating: 0
  },
  {
    id: 3,
    title: "Cloud Computing",
    rating: 4
  },
  {
    id: 4,
    title: "Project Management",
    rating: 4
  },
  {
    id: 5,
    title: "Business Admin",
    rating: 3
  },
  {
    id: 6,
    title: "Sales Marketing",
    rating: 4
  }],
  workAvailability:{
    typeofworkprefferred:[{
      id:1,
      title: "Full-time"
    },
    {
      id:2,
      title: "Internship"
    },

    {
      id:3,
      title: "Casual"
    },
    {
      id:4,
      title: "Apprenticeship"
    }],
    workstatus: "Unemployed",
    distancewillingtotravel: "10 Km",
    workingdays:[{
      id:1,
      day: "Monday",
      timefrom: "9:00 AM",
      timeto: "6:00 PM"
    },
    {
      id:2,
      day: "Wednesday",
      timefrom: "9:00 AM",
      timeto: "6:00 PM"
    },
    {
      id:3,
      day: "Thursday",
      timefrom: "9:00 AM",
      timeto: "6:00 PM"
    },
    {
      id:4,
      day: "Friday",
      timefrom: "9:00 AM",
      timeto: "6:00 PM"
    }],

  },
  test: [{
    id:1,
    name: "Emotional Intelligence Test",
    discription: "Everyone has different levels of emotional intelligence. Let's see what's yours.",
    icon: "../../assets/icons/imotionalint.svg",
    status: "complete"
  },
  {
    id:2,
    name: "Self-Esteem Test",
    discription: "Are you confident? Bold? Self-reliant? Check this out!",
    icon: "../../assets/icons/selfesteem.svg",
    status: "incomplete"
  }],
  workingexperience:[{
    id: 1,
    title: "Junior System Engineer",
    company:{
      name: "Software Engineering Intel",
      city: "Phoenix Arizona ",
      logo: "../../assets/icons/intel.svg"
    },
    tenure: "2003 - 2006"
  },
  {
    id: 2,
    title: "Cashier",
    company:{
      name: "In-N-Out Burger",
      city: "Phoenix Arizona ",
      logo: "../../assets/icons/inanout.svg"
    },
    tenure: "2003 - 2006"
  }],
  meetings:[{
    id:1,
    title: "Mentoring"
  },
  {
    id:2,
    title: "Joining nonprofit boards"
  },
  {
    id:3,
    title: "Paid consulting"
  }],
  profileverificationstatus:[{
    id:1,
    icon:"../../assets/icons/profiledetail.svg",
    title: "Profile Details",
    status: true
  },
  {
    id:2,
    icon:"../../assets/icons/aboutme.svg",
    title: "About Me",
    status: false
  },
  {
    id:3,
    icon:"../../assets/icons/interest.svg",
    title: "Interest",
    status: true
  },
  {
    id:4,
    icon:"../../assets/icons/education.svg",
    title: "Education/Experience",
    status: false
  },
  {
    id:5,
    icon:"../../assets/icons/workavailblity.svg",
    title: "Work Availability",
    status: true
  },
  {
    id:6,
    icon:"../../assets/icons/explorecourse.svg",
    title: "Explored Courses",
    status: true
  },
  {
    id:7,
    icon:"../../assets/icons/network.svg",
    title: "Network",
    status: false
  },
  {
    id:8,
    icon:"../../assets/icons/indorsment.svg",
    title: "Endorsement",
    status: true
  },
  {
    id:9,
    icon:"../../assets/icons/cereer.svg",
    title: "Career Test",
    status: true
  },
  {
    id:10,
    icon:"../../assets/icons/eligibiity.svg",
    title: "Eligibility Test",
    status: true
  }],
  views: 181,
  myDoc:[{
    id: 1,
    title: "Passport",
    file: "Passport.png"
  },
  {
    id: 2,
    title: "Financial Proof",
    file: "Financial proof.doc"
  },
  {
    id: 3,
    title: "IELTS/TOEFL Certificate ",
    file: "Certificate in 2015 Star.pdf"
  }],
  contactdetail: [{
    id: 1,
    contactType: "Whatsapp",
    contactinfo: "+1 323-570-1234"
  },{
    id: 2,
    contactType: "Email",
    contactinfo: "d1c5db2289fb@gmail.com"
  },{
    id: 3,
    contactType: "Skype",
    contactinfo: "live:.cid.d1c5db2289fb"
  }],
  profileverfiedcount:4.5
}

  return  of(this.user)
}




}
