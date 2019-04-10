import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donation-filter',
  templateUrl: './donation-filter.page.html',
  styleUrls: ['./donation-filter.page.scss'],
})
export class DonationFilterPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  previous(){
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  ngOnInit() {
  }

}
