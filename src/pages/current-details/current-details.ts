import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-current-details',
  templateUrl: 'current-details.html',
})
export class CurrentDetailsPage {

  selectedAll = false;
  selected = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentDetailsPage');
  }

  ConfirmListDetails() {
    console.log("hello")
    this.navCtrl.push("ConfirmListPage")
  }

  selectAll() {
    console.log('world!');
    this.selectedAll = !this.selectedAll;    
  }

}
