import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { AlertController, ModalController, NavParams, ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.page.html',
  styleUrls: ['./staff-form.page.scss'],
})
export class StaffFormPage implements OnInit {
//Declare variable,object and array
title='';
staff:any={
  id:'',
  organization_code:'',
  staff_id:'',
  fullname:'',
  password:'',
  email:'',
  usergroup:''
}
staffID='';
data:Observable<any>;
organizations:string[];
usergroups:string[];
btnSubmit=false;
btnUpdate=false;
btnClear=false;
btnDelete=false;
items:string[];
  constructor(
    private modalCtrl:ModalController,
    private http:HttpClient,
    private navParams:NavParams,
    private toastCtrl:ToastController,
    private navCtrl:NavController,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
    this.title='Add New Data';
    this.btnSubmit=true;
    this.btnClear=true;
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.usergroups=data;
    });
    var url='http://localhost/smartfoodbank/organization/organizations';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.organizations=data;
    });
    this.staffID=this.navParams.get('value');
    if(this.staffID !=null || this.staffID !=undefined){
      this.title='Edit Data';
      this.data=this.http.get('http://localhost/smartfoodbank/staff/staffbyid?id='+this.staffID);
      this.data.subscribe(data=>{
        this.staff=data[0];
      });
      var url='http://localhost/smartfoodbank/usergroup/usergroups';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.usergroups=data;
    });
    var url='http://localhost/smartfoodbank/organization/organizations';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.organizations=data;
    });
      this.btnSubmit=false;
      this.btnClear=false;
      this.btnUpdate=true;
      this.btnDelete=true;

    }
  }
   //Close modal and back to previous page
   previous(){
    this.modalCtrl.dismiss();
  }
//Submit new data
async submit(){
  //check whether the field is blank or not
  if(this.staff.organization_code==''|| this.staff.staff_id==''|| this.staff.password==''|| this.staff.email==''||this.staff.usergroup==''){
    const toast = await this.toastCtrl.create({
      message: 'All fields are required.',
      duration: 2000
    });
    toast.present();
  }else{
    var url="http://localhost/smartfoodbank/staff/addstaff";
    this.data=this.http.post(url,this.staff,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
  }
  this.data.subscribe(async data=>{
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: 'Data successfully added.',
      duration: 2000
    });
    toast.present();
    this.navCtrl.navigateRoot(['staff',{items:data}]);
  })
}
//Update current data
async update(){
  if(this.staffID !=''){
    var url='http://localhost/smartfoodbank/staff/updatestaff';
    this.data=this.http.post(url,this.staff,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
    this.data.subscribe(async data=>{
      this.modalCtrl.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Data successfully updated.',
        duration: 2000
      });
      toast.present();
      this.navCtrl.navigateRoot(['staff',{items:data}]);
    })
  }
}
//Delete current data
async delete(){
  // Call alert to ask confirmation before delete the data
  const alert=await this.alertCtrl.create({
    header:'Confirmation Message',
    message:'Are you confirm to delete this data?',
    buttons:[
      {
        text:'Cancel',
        role:'cancel',
        cssClass:'danger',
        handler:(blah)=>{
          this.alertCtrl.dismiss();
        }},
        {
          text:'Confirm',
          handler:()=>{
            if(this.staffID !=''){
              var url='http://localhost/smartfoodbank/staff/deletestaff';
              this.data=this.http.post(url,this.staff,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
              this.data.subscribe(async data=>{
                this.modalCtrl.dismiss();
                const toast = await this.toastCtrl.create({
                  message: 'Data successfully deleted.',
                  duration: 2000
                });
                toast.present();
                this.navCtrl.navigateRoot(['staff',{items:data}]);
              })
            }
          }
        }
    ]
  });
  await alert.present();
}
//Clear form
clear(){
  this.staff.organization_code='';
  this.staff.staff_id='';
  this.staff.fullname='';
  this.staff.password='';
  this.staff.email='';
  this.staff.usergroup='';
}

}
