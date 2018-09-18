import { Component } from '@angular/core';
import { NavController, Events,ModalController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';
import {InfouserPage} from '../infouser/infouser';
import { P2Page } from '../p2/p2';
import { P3Page } from '../p3/p3';
import { P4Page } from '../p4/p4';
import { P5Page } from '../p5/p5';
import { P6Page } from '../p6/p6';
import { P8Page } from '../p8/p8';
import { P7Page } from '../p7/p7';

@Component({
  selector: 'page-sn1',
  templateUrl: 'sn1.html'
  
})
export class SN1 {
 // gaming: string = "n64";
 // gender: string = "f";
 // os: string;
 // music: string;
 // month: string;
 // year: number;
 // sn1: string = "page1";
 // isAndroid: boolean = false;
 // isSec1Enable:boolean
 // isSec2Enable:boolean
 // isSec3Enable:boolean
 // stepCondition:boolean 

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, private events:Events,private modal: ModalController) {
   // this.stepCondition = true;
   // this.isSec1Enable =  true
   // this.isSec2Enable =  false
   // this.isSec3Enable =  false
   // this.events.subscribe("sec1Submitted",() => {
      //  this.sn1="page2"
       // this.isSec2Enable = true;
    //})

    //this.events.subscribe("sec2Submitted",() => {
      //this.sn1="page3"
    //  this.isSec3Enable = true;
  //})
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }
  
  //load(){
    //this.sn1 = "page2";
 // }
  stpSelect() {
    console.log('STP selected');  
  }
  openModal(){
    const myModal = this.modal.create('ModalPage');
  
    myModal.present();
    }
  Convert(){
    const convert = this.modal.create('ConvertModalPage');
    convert.present();
  }
  info(){
    this.navCtrl.push(InfouserPage);
  }
  p2(){
    this.navCtrl.push(P2Page);
  }
  p3(){
    this.navCtrl.push(P3Page);
  }
  p4(){
    this.navCtrl.push(P4Page);
  }
  p5(){
    this.navCtrl.push(P5Page);
  }
  p6(){
    this.navCtrl.push(P6Page);
  }
  p7(){
    this.navCtrl.push(P7Page);
  }
  p8(){
    this.navCtrl.push(P8Page);
  }
 

}