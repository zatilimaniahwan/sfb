import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonationinfoPage } from '../donationinfo/donationinfo';
import { ReceipentPage } from '../receipent/receipent';

/**
 * Generated class for the DonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class DonationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  viewDonation(){
    this.navCtrl.push(DonationinfoPage);
  }
  viewRecipient(){
    this.navCtrl.push(ReceipentPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationPage');
  }

}
