import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Clear Orbit';
  isIframe = false;
  loggedIn = false;
  profile;

  constructor(
    public appComponent: AppComponent,
    public profileComponent: ProfileComponent
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  login(){
    this.appComponent.login();
    this.loggedIn = true;
  }

  logout(){
    this.appComponent.logout();
    this.loggedIn = false;
  }

  getProfile() {
    this.profile = this.profileComponent.getProfile();
    console.log(this.profile);

  }

}


