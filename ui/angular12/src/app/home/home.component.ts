import { Component, OnInit } from '@angular/core';

import {SocialAuthServiceConfig} from 'angularx-social-login';
import {SocialUser, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: SocialUser;

  constructor(private authService : SocialAuthServiceConfig) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user: any) => {
      this.user = user;
    })
  }

}
