import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UgroupPage } from '../ugroup/ugroup';
/**
 * Generated class for the BankdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bankdata',
  templateUrl: 'bankdata.html',
})
export class BankdataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  viewUsergroup(){
    this.navCtrl.push(UgroupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankdataPage');
  }

}
