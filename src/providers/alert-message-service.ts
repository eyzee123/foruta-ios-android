import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


/*
  Generated class for the AlertMessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertMessageServiceProvider {

  constructor(public http: HttpClient,private alertCtrl:AlertController,private toastCtrl:ToastController) {
    console.log('Hello AlertMessageServiceProvider Provider');
  }



async showAlert(msg: string,title?:'') {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: title,  
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

async showToast(msg) {
    const toast = await this.toastCtrl.create({
        message: msg,
        duration: 1000
      });
      toast.present();
}

}
