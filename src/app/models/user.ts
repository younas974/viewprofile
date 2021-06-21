import { Url } from "url";

export class User {
  name: string;
  location: string;
  profession: string;
  followers: number;
  lookingfor: LookingFor[];
  habits: Habit[];
  education: Education;
  coverphoto: any;
  profilephoto: any;
  futureme: FutureMe[];
  aboutMeV: AboutMeVedios[];
  engQualification: EnglishQualification[];
  accumplishments: Accumplishments[];
  hubbies: Hubbies[];
  skillsandendorsment: SkillsandEndorsement[];
  workAvailability: WorkAvailability;
  test : Test[];
  workingexperience: WorkExp[];
  meetings: Meeting[];
  profileverificationstatus: VerifyProfile[];
  views: number;
  myDoc: MyDoc[];
  contactdetail:  ContactDetail[];
  profileverfiedcount: number;
}

export class ContactDetail{
  id: number;
  contactType: string;
  contactinfo: string;
}

export class MyDoc{
  id: number;
  title: string;
  file: any;
}


export class VerifyProfile{
  id: number;
  icon: any;
  title: string;
  status: boolean;
}

export class Meeting{
  id: number;
  title: string;
}

export class Test{
  id:number;
  name: string;
  discription: string;
  icon: any;
  status: string;
}

export class WorkAvailability{
  typeofworkprefferred: TypeOfWork[];
  workstatus: string;
  distancewillingtotravel: string;
  workingdays: WorkingDays[]
}

export class WorkingDays{
  id: number;
  day: string;
  timefrom: string;
  timeto: string;
}

export class TypeOfWork{
  id: number;
  title: string;
}

export class SkillsandEndorsement{
  id:number;
  title: string;
  rating: number;
}

export class Hubbies{
  id: number;
  title: string;
  icon: any;
}

export class Accumplishments{
  id: number;
  title: string;
}

export class EnglishQualification{
  id: number;
  title: string;
  score: number;
}

export class AboutMeVedios{
  id: number;
  src: any;
}

export class FutureMe{
  title: string;
  items: FMItems[];
  logo: any;
}

export class FMItems{
  id: number;
  name: string;
}

export class Habit{
  id:number;
  name:string;
}

export class Education{
  studiedat: string;
  cgpa: number;
  ielts: number;
  toefl: number;
  achievments: string;
  degrees: Degrees[];
}

export class Degrees{
  id: number;
  title: string;
  school: School;
  tenure: string;
  cgpa: number;
  studytype: string;
  language: string;

}

export class WorkExp{
  id: number;
  title: string;
  company: Company;
  tenure: string;
}

export class School{
  name: string;
  city: string;
  country: string;
  logo: any
}

export class Company{
  name: string;
  city: string;
  logo: any
}


export class LookingFor{
  id: number;
  name: string;
}
