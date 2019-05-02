import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { FoodbankFilterPage } from '../foodbank-filter/foodbank-filter.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  map: GoogleMap;
  address:string;
constructor(public modalCtrl:ModalController,public platform:Platform,public toastCtrl:ToastController){}
ngOnInit() {

}

async view(){
  const modal=await this.modalCtrl.create({
    component:FoodbankFilterPage,
  });
  return await modal.present();
}
}

