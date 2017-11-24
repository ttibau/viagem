import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookAFlightPage } from '../pages/book-a-flight/book-a-flight';
import { BoardingPassesPage } from '../pages/boarding-passes/boarding-passes';
import { FlightStatusPage } from '../pages/flight-status/flight-status';
import { FlightStatusResultPage } from '../pages/flight-status-result/flight-status-result';
import { FidelityPage } from '../pages/fidelity/fidelity';
import { MyTripsPage } from '../pages/my-trips/my-trips';
import { ProfilePage } from '../pages/profile/profile';

import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    BookAFlightPage,
    BoardingPassesPage,
    FlightStatusPage,
    FlightStatusResultPage,
    FidelityPage,
    MyTripsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleColor: "#FFFFFF",
      subtitleColor: "#FFFFFF",
      unitsColor: "#FFFFFF"
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    BookAFlightPage,
    BoardingPassesPage,
    FlightStatusPage,
    FlightStatusResultPage,
    FidelityPage,
    MyTripsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
