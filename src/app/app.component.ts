import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookAFlightPage } from '../pages/book-a-flight/book-a-flight';
import { BoardingPassesPage } from '../pages/boarding-passes/boarding-passes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any;
  @ViewChild('content') nav:Nav;

  public pages: Array<{ titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.rootPage = HomePage;
    this.pages = [
      { titulo: 'Dashboard', component: DashboardPage, icon: 'md-construct'},
      { titulo: 'Book a Flight', component: BookAFlightPage, icon: 'plane'},
      { titulo: 'Boarding Passes', component: BoardingPassesPage, icon: 'globe'},
    ];

  }

  goToPage(page){
    this.nav.setRoot(page)
  }
}

