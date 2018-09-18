import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';

/**
 * Generated class for the InfouserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infouser',
  templateUrl: 'infouser.html',
})
export class InfouserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfouserPage');
  }
  goHome(){
    this.navCtrl.push(SN1);
  }
}
