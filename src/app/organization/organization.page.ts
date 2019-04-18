import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { NavController, ModalController } from '@ionic/angular';
import { OrganizationFormPage } from '../organization-form/organization-form.page';
import { StaffFormPage } from '../staff-form/staff-form.page';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  data:Observable<any>;
  items:string[];
  org;
  staff;
  title='';
  cardOrg=false;
  cardStaff=false;
  constructor(private navCtrl:NavController,private http:HttpClient,private modalCtrl:ModalController) { 
    this.title='Organization';
  }
  previous(){
    this.navCtrl.navigateForward('/tabs/tab4');
  }
  ngOnInit() {
    this.org=true;
    this.staff=false;
    this.cardOrg=true;
    this.cardStaff=false;
    var url='http://localhost/smartfoodbank/organization/organizations';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.items=data;
    });
  }
  segmentOrganization(){
    this.title='Organization';
    this.org=true;
    this.staff=false;
    this.cardOrg=false;
    this.cardStaff=false;
    var url='http://localhost/smartfoodbank/organization/organizations';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.items=data;
      this.cardOrg=true;
    });
  }
  segmentStaff(){
    this.title='Staff';
    this.org=false;
    this.staff=true;
    this.cardOrg=false;
    this.cardStaff=false;
    this.cardStaff=false;
    var url='http://localhost/smartfoodbank/staff/staffs';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.items=data;
      this.cardStaff=true;
    });
  }
  async createOrg(){
    const modal= await this.modalCtrl.create({
      component:OrganizationFormPage
    });
    return modal.present();
  }
  async createStaff(){
    const modal=await this.modalCtrl.create({
      component:StaffFormPage
    });
    return modal.present();
  }
  async editOrg(id){
    const modal=await this.modalCtrl.create({
      component:OrganizationFormPage,
      componentProps:{value:id}
    });
    return modal.present();
  }
  async editStaff(id){
    const modal= await this.modalCtrl.create({
      component:StaffFormPage,
      componentProps:{value:id}
    });
    return modal.present();
  }

}
