import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P3Page } from '../p3/p3';

/**
 * Generated class for the ShowdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showdrug',
  templateUrl: 'showdrug.html',
})
export class ShowdrugPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowdrugPage');
  }
  gotop3(){
    this.navCtrl.push(P3Page);
  }
}
