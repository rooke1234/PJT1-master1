import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';
import { ShowmePage } from '../showme/showme';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';

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
  public resposeData:any;
  public data:any;

  public sid:any;
  userData = {
    "id_patient": "",
    "id_doctor": "",
      "name": "",
      "sex" :"",
      "weight" :"",
      "height" :"",
      "year" :"",
      "hisdrug" :"",
      "dis" :"",
      "doc" :"",
      "hos" :"",
      "doctel" :"",
      "tel" :""
  };

  userDatap = {
    "id_patient": ""
  
  };

  userDetails = { "user_id": "" };
  constructor(public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      this.getAccount();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfouserPage');
  }
  goHome(){
    this.navCtrl.push(ShowmePage);
  }

  openGallery(){
    //const option 
  }
  getAccount() {
    this.userDatap.id_patient = this.sid;
    console.log("kkkkk"+this.userData);
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        console.log(this.data)
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }
  
}
