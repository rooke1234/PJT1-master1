import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ComponentsModule } from '../components/components.module';
import { MyApp } from './app.component';
import { SN1 } from '../pages/sn1/sn1';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import {InfouserPage} from '../pages/infouser/infouser';
import { P2Page } from '../pages/p2/p2';
import { P3Page } from '../pages/p3/p3';
import { P4Page } from '../pages/p4/p4';
import { P5Page } from '../pages/p5/p5';
import { P6Page } from '../pages/p6/p6';
import { P7Page } from '../pages/p7/p7';
import { P8Page } from '../pages/p8/p8';
import { RegisterPage } from '../pages/register/register';
@NgModule({
  declarations: [
    MyApp,
    SN1,
    HomePage,
    InfouserPage,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    P6Page,
    P7Page,
    P8Page,
    RegisterPage
  

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SN1,
    HomePage,
    InfouserPage,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    P6Page,
    P7Page,
    P8Page,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
