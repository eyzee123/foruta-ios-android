import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { AlertMessageServiceProvider } from 'src/providers/alert-message-service';
import { LoadingServiceProvider } from 'src/providers/loading-service';
import { PostProvider } from 'src/providers/post-provider';
import { Storage } from '@ionic/storage';
import { EmailValidatorServiceProvider } from 'src/providers/emailValidator';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string;
  password: string;
    constructor(private route: Router, public menuCtrl: MenuController,
      private alertMsg: AlertMessageServiceProvider,
      private loadingService:LoadingServiceProvider,
      private postService: PostProvider,
      private emailValidator: EmailValidatorServiceProvider,
      private storage:Storage,
      
      ) {
    this.menuCtrl.enable(false);
    }

  ngOnInit() {
  }
    
  location() {
    this.route.navigate(['./location']);
  }  
 signup() {
    this.route.navigate(['./signup']);
  } 
 forgotpassword() {
    this.route.navigate(['./forgot']);
  } 

  login() {
    if (!this.email || this.email.trim() == "") {
      this.alertMsg.showAlert("Email cannot be empty!");
    } else if (!this.password || this.password.trim() == "") {
      this.alertMsg.showAlert("Password cannot be empty!");
    } else if (this.password.length < 6) {
      this.alertMsg.showAlert("Password must be atleast 6 characters!");
    } else if (!this.emailValidator.validateEmail(this.email)) {
      this.alertMsg.showAlert("Enter a valid email!");
    } else {
      this.userLogin(this.email, this.password);
    }
  }
  userLogin(email, pass) {
    this.loadingService.presentLoading();
    let body = {
      email: email,
      password: pass,
      device_token: "",
      role: "user",
    };

    this.postService.postData(body, "login").subscribe(async (data) => {
      console.log(data);
      if (data["code"] == 200) {
        let user = {
          id: data['msg']['UserInfo']['user_id'],
          first_name: data['msg']['UserInfo']['first_name'],
          last_name: data['msg']['UserInfo']['last_name'],
          email: data['msg']['User']['email'],
          phone: data['msg']['UserInfo']['phone'],
          role: data['msg']['UserInfo']['role'],
          isLogin: true,
        }
     //   this.storage.set('user',user);
      
         // this.navCtrl.push(HomePage);

         this.loadingService.dissmissLoading2();
          console.log(user);

      }else{
        this.loadingService.dissmissLoading2();
        this.alertMsg.showAlert(data.msg);
   
      }

    });
  }

}
