import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoxinfoPage } from '../boxinfo/boxinfo';
import { BoxlocationPage } from '../boxlocation/boxlocation';

/**
 * Generated class for the FoodbankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodbank',
  templateUrl: 'foodbank.html',
})
export class FoodbankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  settingInfo(){
    this.navCtrl.push(BoxinfoPage);
  }
  settingLocation(){
    this.navCtrl.push(BoxlocationPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodbankPage');
  }

}
