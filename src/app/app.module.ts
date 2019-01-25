import { FirstProductPage } from './../pages/first-product/first-product';
import { SplashScreenPage } from './../pages/splash-screen/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slide } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SlidePage } from '../pages/slide/slide';
import { HttpClientModule } from '@angular/common/http';
import { SecondProductPage } from '../pages/second-product/second-product';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SplashScreenPage,
    SlidePage,
    FirstProductPage,
    SecondProductPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SplashScreenPage,
    SlidePage,
    FirstProductPage,
    SecondProductPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
