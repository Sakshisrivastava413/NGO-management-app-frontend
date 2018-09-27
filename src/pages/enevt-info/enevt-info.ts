import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnevtInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enevt-info',
  templateUrl: 'enevt-info.html',
})
export class EnevtInfoPage {

  contributed = [1869, 1392, 987, 1900];
  totals = [2507, 1621, 3000, 2500];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnevtInfoPage');
    this.update();
  }

  update() {
    setInterval(() => {
      setTimeout(() => {
        this.contributed.forEach((c, i) => {
          if (Math.random() > 0.5)
            this.contributed[i] += 1;
        })
      }, Math.floor(Math.random() * 10));
    }, 500);
  }

}
