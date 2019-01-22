import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';

/**
 * Generated class for the P4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p4',
  templateUrl: 'p4.html',
})
export class P4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P4Page');
  }
  backhomee(){
    this.navCtrl.push(SN1);
  }
}
