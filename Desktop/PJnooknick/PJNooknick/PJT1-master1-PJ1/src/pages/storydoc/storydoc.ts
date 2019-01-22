import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CreatstoryPage } from '../creatstory/creatstory';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the StorydocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storydoc',
  templateUrl: 'storydoc.html',
})
export class StorydocPage {
  
  public resposeData:any;
  public data:any;
  userData = {
    "id_story": "",
    "id_patient": "",
    "date":"", 
    "topic": "",
    "detail": "",
    "status_story":""
  };
  userDatap = {
    "id_patient": ""
  };
  userDetails = { "user_id": "" };
  public sid:any;
  constructor(public app: App,private storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
   this.storage.get('userData').then((val) =>{
    var val = JSON.parse(val);
    this.userDetails.user_id = val;
    this.sid = this.userDetails.user_id;
    this.showStory();
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorydocPage');
  }
  creat(){
    this.navCtrl.push(CreatstoryPage);
  }
  showStory(){
    this.authService.PostData(this.userData,"GetToppic").then((result)=>{
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }
}
