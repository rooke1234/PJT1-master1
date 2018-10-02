import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P2Page } from '../p2/p2';


/**
 * Generated class for the ResultsymPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultsym',
  templateUrl: 'resultsym.html',
})
export class ResultsymPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsymPage');
  }
  gop2(){
    this.navCtrl.push(P2Page);
  }
}
