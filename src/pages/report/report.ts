import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportdonationPage } from '../reportdonation/reportdonation';
import { ReportrecipientPage } from '../reportrecipient/reportrecipient';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  reportDonation(){
    this.navCtrl.push(ReportdonationPage);
  }
  reportRecipient(){
    this.navCtrl.push(ReportrecipientPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
