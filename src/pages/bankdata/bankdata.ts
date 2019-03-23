import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StatePage} from '../state/state';
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
  viewState(){
    this.navCtrl.push(StatePage);
  }
  viewUsergroup(){
    this.navCtrl.push(UgroupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankdataPage');
  }

}
