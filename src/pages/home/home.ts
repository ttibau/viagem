import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  loginClick()  {
    this.navCtrl.setRoot(DashboardPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  ionViewWillEnter(){
    this.menu.enable(false)
  }

}
