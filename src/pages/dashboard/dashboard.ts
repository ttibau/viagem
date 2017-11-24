import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { BookAFlightPage } from '../book-a-flight/book-a-flight';
import { FidelityPage } from '../fidelity/fidelity';
import { MyTripsPage } from '../my-trips/my-trips';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ionViewWillEnter(){
    this.menu.enable(true);
  }

  goToBookAFlightPage(){
    this.navCtrl.push(BookAFlightPage);
  }

  goToFidelityPage(){
    this.navCtrl.push(FidelityPage);
  }

  goToMyTripsPage(){
    this.navCtrl.push(MyTripsPage);
  }

}
