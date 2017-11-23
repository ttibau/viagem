import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlightStatusResultPage } from '../flight-status-result/flight-status-result';

@IonicPage()
@Component({
  selector: 'page-flight-status',
  templateUrl: 'flight-status.html',
})
export class FlightStatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightStatusPage');
  }

  goToResult(){
    this.navCtrl.push(FlightStatusResultPage);
  }
}
