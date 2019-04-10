import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(public navCtrl:NavController) { }
  viewUser(){
    this.navCtrl.navigateForward('usergroup');
  }
  viewOrg(){
    this.navCtrl.navigateForward('organization');
  }
  viewBox(){
    this.navCtrl.navigateForward('boxinfo');
  }
  viewAnnounce(){
    this.navCtrl.navigateForward('announcement');
  }

  ngOnInit() {
  }

}
