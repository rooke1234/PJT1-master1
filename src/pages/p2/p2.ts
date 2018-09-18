import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';

/**
 * Generated class for the P2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p2',
  templateUrl: 'p2.html',
})
export class P2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P2Page');
  }
  backhomee(){
    this.navCtrl.push(SN1);
  }
}
