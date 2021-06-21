import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermaincarasolComponent } from './components/userprofile/usermaincarasol/usermaincarasol.component';
import { HilightsComponent } from './components/userprofile/hilights/hilights.component';
import { UserexperienceComponent } from './components/userprofile/userexperience/userexperience.component';
import { WorkavailityComponent } from './components/userprofile/workavaility/workavaility.component';
import { EducationComponent } from './components/userprofile/education/education.component';
import { AccomplishmentsComponent } from './components/userprofile/accomplishments/accomplishments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FollowersComponent } from './components/userprofile/followers/followers.component';
import { InterestedcontriesComponent } from './components/userprofile/interests/interestedcontries.component';
import { SkillsandendorsementComponent } from './components/userprofile/skillsandendorsement/skillsandendorsement.component';
import { RatingModule } from 'ng-starrating';
import { AboutmeComponent } from './components/userprofile/aboutme/aboutme.component';
import { FuturemeComponent } from './components/userprofile/futureme/futureme.component';
import { AboutmvComponent } from './components/userprofile/aboutmv/aboutmv.component';
import { EnglishqualificationComponent } from './components/userprofile/englishqualification/englishqualification.component';
import { TestsComponent } from './components/userprofile/tests/tests.component';
import { MeetingComponent } from './components/userprofile/meeting/meeting.component';
import { VerifyprofileComponent } from './components/userprofile/verifyprofile/verifyprofile.component';
import { MydocComponent } from './components/userprofile/mydoc/mydoc.component';
import { ContantdetailsComponent } from './components/userprofile/contantdetails/contantdetails.component';
import { VerifyprofileprogressComponent } from './components/userprofile/verifyprofileprogress/verifyprofileprogress.component';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/userprofile/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserinfoComponent } from './components/userprofile/userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    UsermaincarasolComponent,
    HilightsComponent,
    UserexperienceComponent,
    WorkavailityComponent,
    EducationComponent,
    AccomplishmentsComponent,
    FollowersComponent,
    InterestedcontriesComponent,
    SkillsandendorsementComponent,
    AboutmeComponent,
    FuturemeComponent,
    AboutmvComponent,
    EnglishqualificationComponent,
    TestsComponent,
    MeetingComponent,
    VerifyprofileComponent,
    MydocComponent,
    ContantdetailsComponent,
    VerifyprofileprogressComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingModule,
    FormsModule,
   // MDBBootstrapModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
