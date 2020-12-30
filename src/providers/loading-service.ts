import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


/*
  Generated class for the LoadingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingServiceProvider {
  loading:any;
  constructor(public loadingCtrl:LoadingController ,public http: HttpClient) {
    console.log('Hello LoadingServiceProvider Provider');
  }

  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
      // content: `
      //   <div class="custom-spinner-container">
      //     <div class="custom-spinner-box">
      //        <img src="assets/imgs/rocket.gif" />
      //     </div>
      //   </div>`,
      duration: 5888000
    });
    this.loading.present();
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
     // cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'bubbles',
    
    });
    await loading.present();

  }

  dissmissLoading2(){
      this.loadingCtrl.dismiss();
  }
  
  dismissLoading(){
    return new Promise((res,rej)=>{
    setTimeout(() => {
      res(this.loading.dismiss());
    }, 1500);
  })
  }

}
