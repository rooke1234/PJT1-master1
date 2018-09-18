import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController,ModalController,LoadingController } from 'ionic-angular';
import { SN1 } from '../sn1/sn1'
import { RegisterPage } from '../register/register';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu : MenuController,private modal: ModalController,public loadingCtrl: LoadingController) {
    menu.enable(true);
  }
  
    
  generateSN1(){
    this.navCtrl.push(SN1);
  }
  openModal(){
    const myModal = this.modal.create('ModalPage');
  
    myModal.present();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToPrePlay(){
    
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่....",
      duration: 3000
    });
    loader.present();
  }
  nextregister(){
    this.navCtrl.push(RegisterPage);

  }
}
