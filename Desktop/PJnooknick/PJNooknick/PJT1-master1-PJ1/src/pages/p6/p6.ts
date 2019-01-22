import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { CreatethemePage } from '../createtheme/createtheme';

/**
 * Generated class for the P6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p6',
  templateUrl: 'p6.html',
})
export class P6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P6Page');
  }
  backhomeee(){
    this.navCtrl.push(SN1);
  }
  create(){
    this.navCtrl.push(CreatethemePage);
  }
}
