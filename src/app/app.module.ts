import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TitlePageModule } from './title/title.module';

import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { EmailValidatorServiceProvider } from 'src/providers/emailValidator';
import { AlertMessageServiceProvider } from 'src/providers/alert-message-service';
import { LoadingServiceProvider } from 'src/providers/loading-service';
import { PostProvider } from 'src/providers/post-provider';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
      HttpClientModule,
      HttpModule,
      IonicStorageModule.forRoot(),
      TranslateModule,  
	  TitlePageModule, 
      TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailValidatorServiceProvider,
    AlertMessageServiceProvider,
    LoadingServiceProvider,
    PostProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
