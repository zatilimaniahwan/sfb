import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.page.html',
  styleUrls: ['./organization-form.page.scss'],
})
export class OrganizationFormPage implements OnInit {
  title='';

  constructor(private modalCtrl:ModalController) { }

  previous(){
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.title='Add Data';
  }

}
