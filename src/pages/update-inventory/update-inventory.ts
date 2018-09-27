import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-update-inventory',
  templateUrl: 'update-inventory.html',
})
export class UpdateInventoryPage {

  foodItems = [
    {
      title: 'Rice',
      qty: 500
    },
    {
      title: 'Sugar',
      qty: 103
    },
    {
      title: 'Pulses',
      qty: 203
    }
  ];

  clothItems = [
    {
      title: 'Quilt',
      qty: 33
    },
    {
      title: 'Blankets',
      qty: 57
    }
  ]

  medicines = [
    {
      title: 'Paracetamol',
      qty: 150
    },
    {
      title: 'First AID boxes',
      qty: 189
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController,
  public toast: ToastController, public loading: LoadingController) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateInventoryPage');
  }

  updateFood(i) {
    let item = this.foodItems[i];
    this.alert.create({
      message: `Register a transaction for ${item.title}`,
      inputs: [
        {
          type: 'number',
          id: 'transact-num'
        }
      ],
      buttons: [
        {
          text: 'confirm',
          handler: () => {
            const input: any = document.getElementById('transact-num')
            item.qty += Number(input.value);
            let loader = this.loading.create({
              duration: 500,
              content: 'Registering transaction...'
            });
            loader.present();
            loader.onDidDismiss(() => {
              this.toast.create({
                message: 'Transaction Sucessfully created!',
                duration: 1000
              }).present();
            })
          }
        },
        {
          text: 'cancel'
        }
      ]
    }).present();
  }


  updateCloth(i) {
    let item = this.clothItems[i];
    this.alert.create({
      message: `Register a transaction for ${item.title}`,
      inputs: [
        {
          type: 'number',
          id: 'transact-num'
        }
      ],
      buttons: [
        {
          text: 'confirm',
          handler: () => {
            const input: any = document.getElementById('transact-num');
            item.qty += Number(input.value);
            let loader = this.loading.create({
              duration: 500,
              content: 'Registering transaction...'
            });
            loader.present();
            loader.onDidDismiss(() => {
              this.toast.create({
                message: 'Transaction Sucessfully created!',
                duration: 1000
              }).present();
            })
          }
        },
        {
          text: 'cancel'
        }
      ]
    }).present();
  }
}
