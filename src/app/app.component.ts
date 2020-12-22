import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  rtlSide = "left"; 
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      sub_title: 'list_restaurants',
      url: '/home',
      icon: 'zmdi zmdi-store ion-text-start'
    },
    {
      title: 'my_orders',
      sub_title: 'current_past_orders',
      url: '/myorders',
      icon: 'zmdi zmdi-cutlery ion-text-start'
    },
    {
      title: 'wallet',
      sub_title: 'user_wallet_for_quick_payment',
      url: '/wallet',
      icon: 'zmdi zmdi-balance-wallet ion-text-start'
    },
    {
      title: 'my_profile',
      sub_title: 'my_details_info',
      url: '/myprofile',
      icon: 'zmdi zmdi-pin-account ion-text-start'
    },
    {
      title: 'bookmarked',
      sub_title: 'list_of_restros_you_bookmarked',
      url: '/bookmark',
      icon: 'zmdi zmdi-favorite ion-text-start'
    },
    {
      title: 'reviews',
      sub_title: 'reviews_list',
      url: '/review',
      icon: 'zmdi zmdi-ticket-star ion-text-start'
    },
    {
      title: 'languges',
      sub_title: 'select_preferred_language',
      url: '/select-language',
      icon: 'zmdi zmdi-globe ion-text-start'
    },
    {
      title: 'contact_us',
      sub_title: 'let_us_know_your_queries_feedbacks',
      url: '/contact',
      icon: 'zmdi zmdi-comment-text ion-text-start'
    }
  ];

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, private myEvent: MyEvent) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  buyAppAction() {
    window.open("https://bit.ly/cc2_foodish", '_system', 'location=no');
  }

  my_profile() {
    this.navCtrl.navigateRoot(['./myprofile']);
  }

}
