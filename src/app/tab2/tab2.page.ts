import { Component, OnInit } from '@angular/core';
import { NavController, ModalController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { RecipientFormPage } from '../recipient-form/recipient-form.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  data:Observable<any>;
  items:string[];
  show;
  title='';
  constructor(private navCtrl:NavController,private http:HttpClient,private modalCtrl:ModalController){
    this.show=false;
  }
  viewFilter(){
    this.navCtrl.navigateForward('donation-filter');
  }
 segmentDonation(){
  var url='http://localhost/smartfoodbank/donation/donations';
  this.data=this.http.get(url);
  this.data.subscribe(data=>{
    this.items=data;
  });
  this.show=false;
this.title='Donation';
 }
 segmentRecipient(){
  var url='http://localhost/smartfoodbank/recipient/recipients';
  this.data=this.http.get(url);
  this.data.subscribe(data=>{
    this.items=data;
  });
  this.title='Recipient';
  this.show=true;
 }
 async create(){
  const modal=await this.modalCtrl.create({
    component:RecipientFormPage
  });
  modal.present();
 }
  ngOnInit() {
    this.title='Donation';
    var url='http://localhost/smartfoodbank/donation/donations';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.items=data;
    });
    

  }

  
}

