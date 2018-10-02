import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P5Page } from '../p5/p5';
import { P6Page } from '../p6/p6';
import { P7Page } from '../p7/p7';

/**
 * Generated class for the MenudoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menudoctor',
  templateUrl: 'menudoctor.html',
})
export class MenudoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudoctorPage');
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
}
