import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ConfirmListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-list',
  templateUrl: 'confirm-list.html',
})
export class ConfirmListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmListPage');
  }

  FinalConfirmation() {
    const confirm = this.alert.create({
      title: 'Event Confirmation',
      message: 'Are you sure you want to continue',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.setRoot("HomePage")
            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot("HomePage")
          }
        }
      ]
    });
    confirm.present();
  }
  }


