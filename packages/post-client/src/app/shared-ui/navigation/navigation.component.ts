import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import {
  COMMUNICATION,
  LIST,
} from '../../constants/storage';
import { NEW_ID } from '../../constants/common';
import { ADD_BUTTON_ROUTES } from '../../constants/url-paths';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  tokenIsValid: boolean;
  loggedIn: boolean;
  routeArray: string[];
  hideFAB: boolean;
  isCommunicationEnabled: boolean;
  isIdentityProviderAvailable: boolean;
  fabButtonEnable: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {
    this.router.events
      .pipe(filter(route => route instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        this.routeArray = route.url.split('/');
        // add routes to ADD_BUTTON_ROUTES array to enable add button on your listing routes.
        if (
          ADD_BUTTON_ROUTES.includes(
            this.routeArray[this.routeArray.length - 1],
          )
        ) {
          this.fabButtonEnable = true;
          return;
        }
        this.fabButtonEnable = false;
      });
  }

  ngOnInit(): void {
    

    this.setUserSession();
    try {
      this.isCommunicationEnabled = JSON.parse(
        localStorage.getItem(COMMUNICATION),
      );
    } catch (error) {
      this.isCommunicationEnabled = false;
    }
  }

  login() {
  }

  logout() {
   
    this.tokenIsValid = false;
  }

  setUserSession() {
  }

  addModel() {
    // TODO: make it better in UI/UX
    if (this.routeArray.includes(LIST)) {
      this.routeArray[this.routeArray.indexOf(LIST)] = this.routeArray[
        this.routeArray.length - 1
      ];
      this.routeArray[this.routeArray.length - 1] = NEW_ID;
      this.router.navigate(this.routeArray);
    }
  }
}
