import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookAFlightPage } from '../book-a-flight/book-a-flight';


@IonicPage()
@Component({
  selector: 'page-my-trips',
  templateUrl: 'my-trips.html',
})
export class MyTripsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTripsPage');
  }

  goToBookAFlight() {
    this.navCtrl.setRoot(BookAFlightPage);
  }

}
