import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginClick()  {
    this.navCtrl.push(DashboardPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
