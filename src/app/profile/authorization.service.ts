import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { InteractionRequiredAuthError, AuthError } from 'msal';

import { environment } from "../../environments/environment";


const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Injectable({ providedIn: "root" })
export class AuthorizationService {

  profile;

  constructor(private authService: MsalService, private http: HttpClient) {}

  getProfile() {
    return this.http.get(GRAPH_ENDPOINT)
  }
}
