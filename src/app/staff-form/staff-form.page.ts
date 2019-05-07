import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { AlertController, ModalController, NavParams, ToastController, NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.page.html',
  styleUrls: ['./staff-form.page.scss'],
})
export class StaffFormPage implements OnInit {
//Declare variable,object and array
title='';
public staffForm: FormGroup;
staffID='';
staff:any={
organization_code:'',
staff_code:'',
fullname:'',
email:'',
usergroup:''
}
data:Observable<any>;
organizations:string[];
usergroups:string[];
btnSubmit=false;
btnUpdate=false;
btnClear=false;
btnDelete=false;
inputPassword=false;
items:string[];
constructor(
    private modalCtrl:ModalController,
    private http:HttpClient,
    private navParams:NavParams,
    private toastCtrl:ToastController,
    private alertCtrl:AlertController,
    public formBuilder: FormBuilder
  ) {

    this.staffForm = formBuilder.group({
      organization_code: ['', Validators.compose([Validators.required])],
      staff_code: ['', Validators.compose([Validators.maxLength(4), Validators.pattern('[a-zA-Z][0-9]*'), Validators.required])],
      fullname: ['', Validators.compose([Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required,Validators.email])],
      usergroup: ['', Validators.compose([Validators.required])]

  });
   }

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
      this.inputPassword=false;
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
    var url='http://localhost/smartfoodbank/staff/staffs';
    this.data=this.http.get(url);
    this.data.subscribe(async data=>{
      this.items=data;
      this.modalCtrl.dismiss(this.items);
    })
  }
//Submit new data
async submit(){
  if(!this.staffForm.valid){
    const toast = await this.toastCtrl.create({
      message: 'All fields are required.',
      duration: 2000
    });
    toast.present();
    return;
  }else{
    var url="http://localhost/smartfoodbank/staff/addstaff";
    this.data=this.http.post(url,this.staff,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
  }
  //after post data, close modal and get updated data from db
  this.data.subscribe(data=>{
    this.onModalCloseCreate()
   })
}
onModalCloseCreate(){
  var url='http://localhost/smartfoodbank/staff/staffs';
    this.data=this.http.get(url);
    this.data.subscribe(async data=>{
      this.items=data;
      this.modalCtrl.dismiss(this.items);
      const toast = await this.toastCtrl.create({
        message: 'Data successfully added.',
        duration: 2000
      });
      toast.present();
    })
}
//Update current data
async update(){
  if(this.staffID !=''){
    var url='http://localhost/smartfoodbank/staff/updatestaff';
    this.data=this.http.post(url,this.staff,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
    this.data.subscribe(data=>{
     this.onModalCloseUpdate()
    });
  }
}
onModalCloseUpdate(){
  var url='http://localhost/smartfoodbank/staff/staffs';
    this.data=this.http.get(url);
    this.data.subscribe(async data=>{
      this.items=data;
      this.modalCtrl.dismiss(this.items);
      const toast = await this.toastCtrl.create({
        message: 'Data successfully updated.',
        duration: 2000
      });
      toast.present();
    })
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
        handler:()=>{
          this.alertCtrl.dismiss();
        }},
        {
          text:'Confirm',
          handler:()=>{
            if(this.staffID !=''){
              var url='http://localhost/smartfoodbank/staff/deletestaff';
              this.data=this.http.post(url,this.staff,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
              this.data.subscribe(async data=>{
                this.onCloseModalDelete()
              });
              
            }
          }
        }
    ]
  });
  await alert.present();
}
onCloseModalDelete(){
  var url='http://localhost/smartfoodbank/staff/staffs';
    this.data=this.http.get(url);
    this.data.subscribe(async data=>{
      this.items=data;
      this.modalCtrl.dismiss(this.items);
      const toast = await this.toastCtrl.create({
        message: 'Data successfully deleted.',
        duration: 2000
      });
      toast.present();
    })
}
//Clear form
clear(){
  this.staffForm = this.formBuilder.group({
    organization_code:'',
    staff_code: '',
    fullname: '',
    email: '',
    usergroup:''

});
}


}
