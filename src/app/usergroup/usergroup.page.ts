import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { UsergroupFormPage } from '../usergroup-form/usergroup-form.page';

@Component({
  selector: 'app-usergroup',
  templateUrl: './usergroup.page.html',
  styleUrls: ['./usergroup.page.scss'],
})
export class UsergroupPage implements OnInit {
  data:Observable<any>;
  items:string[];
  constructor(public navCtrl:NavController,public http:HttpClient,public modalCtrl:ModalController) { }
  previous(){
    this.navCtrl.navigateForward('/tabs/tab4')
  }
  ngOnInit() {
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.items=data;
    });
  }
  async create(){
    const modal = await this.modalCtrl.create({
      component:UsergroupFormPage
    });
  return modal.present();
  }
  async edit(id){
    const modal=await this.modalCtrl.create({
      component:UsergroupFormPage,
      componentProps:{value:id}
    });
   return modal.present();
  }

}
