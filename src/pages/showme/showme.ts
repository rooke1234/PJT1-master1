import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { InfouserPage } from '../infouser/infouser';

/**
 * Generated class for the ShowmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showme',
  templateUrl: 'showme.html',
})
export class ShowmePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmePage');
  }
  backhome(){
    this.navCtrl.push(InfouserPage);
  }
}
