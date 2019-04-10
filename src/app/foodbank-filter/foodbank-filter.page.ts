import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-foodbank-filter',
  templateUrl: './foodbank-filter.page.html',
  styleUrls: ['./foodbank-filter.page.scss'],
})
export class FoodbankFilterPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

  previous(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
