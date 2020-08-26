import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthorizationService } from '../profile/authorization.service';

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
    public authorizationComponent: AuthorizationService
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
    this.authorizationComponent.getProfile().subscribe(data => this.profile = data);
  }

}


