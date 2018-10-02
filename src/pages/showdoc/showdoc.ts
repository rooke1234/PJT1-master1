import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P4Page } from '../p4/p4';

/**
 * Generated class for the ShowdocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showdoc',
  templateUrl: 'showdoc.html',
})
export class ShowdocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowdocPage');
  }
  gotop4(){
    this.navCtrl.push(P4Page);
  }
}
