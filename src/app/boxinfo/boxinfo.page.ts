import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { BoxinfoFormPage } from '../boxinfo-form/boxinfo-form.page';

@Component({
  selector: 'app-boxinfo',
  templateUrl: './boxinfo.page.html',
  styleUrls: ['./boxinfo.page.scss'],
})
export class BoxinfoPage implements OnInit {
  data:Observable<any>;
  items:string[];
  constructor(private modalCtrl:ModalController,private navCtrl:NavController,private http:HttpClient) { }

  ngOnInit() {
    var url='http://localhost/smartfoodbank/foodbanklocation/foodbanklocations';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.items=data;
    });
  }
  async create(){
    const modal= await this.modalCtrl.create({
      component:BoxinfoFormPage
    });
    return modal.present();
  }
  async edit(id){
    const modal= await this.modalCtrl.create({
      component:BoxinfoFormPage,
      componentProps:{'value':id}
    });
    return modal.present();
  }
  previous(){
    this.navCtrl.navigateForward('/tabs/tab4');
  }

}
