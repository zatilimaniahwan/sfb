import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UgroupPage } from '../ugroup/ugroup';

/**
 * Generated class for the UgroupformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ugroupform',
  templateUrl: 'ugroupform.html',
})
export class UgroupformPage {
data:Observable<any>;
ugroup:any={
  id:'',
  code:'',
  desc:''
}
items:string[];
title='';
btnSave=false;
btnUpdate=false;
btnDelete=false;
ugroupID='';
toaster:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public http:HttpClient) {
    // Set title for create/add new data
    this.title='Add New';
    this.btnSave=true;
    this.btnDelete=false;
    this.btnUpdate=false;
    // get current id for record
    this.ugroupID=navParams.get("ugroupID");
    
    // Set title if edit (Make it dynamic!!!)
    if(this.ugroupID !=null || this.ugroupID !=undefined){
      this.title='Edit Record';
      this.btnSave=false;
      this.btnDelete=true;
      this.btnUpdate=true;
    }
    // Set properties of toaster
    this.toaster=this.toastCtrl.create({
      duration:5000,
      position:'bottom'
    });
  }

  ionViewDidLoad() {
    console.log(this.ugroupID);
    if(this.ugroupID!= null){
      this.data=this.http.get('http://localhost/smartfoodbank/usergroup/usergroupbyid?id='+this.ugroupID);
      this.data.subscribe(data=>{
        this.ugroup=data[0];
        console.log(this.ugroup);
      });
    }
  }
  save(){
    if(this.ugroup.code==''|| this.ugroup.desc==''){
      this.toaster.setMessage('All fields are required');
      this.toaster.present();
    }else{
      var url="http://localhost/smartfoodbank/usergroup/addusergroup";
      this.data=this.http.post(url,this.ugroup,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
      }
      this.data.subscribe(data=>{
        this.toaster.setMessage('Data successfully added');
        this.toaster.present();
        this.navCtrl.setRoot(UgroupPage,{items:data});
        console.log(data);
      })
    }
    update(){
      if(this.ugroupID!=''){
       
          var url='http://localhost/smartfoodbank/usergroup/updateusergroup';
        this.data=this.http.post(url,this.ugroup,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
        this.data.subscribe(data=>{
          this.toaster.setMessage('Data successfully updated');
          this.toaster.present();
          this.navCtrl.setRoot(UgroupPage,{items:data});
          console.log(data);
        })
      }
    }
    delete(){
      if(this.ugroupID!=''){
        console.log(this.ugroupID);
        var url='http://localhost/smartfoodbank/usergroup/deleteusergroup';
        this.data=this.http.post(url,this.ugroup,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
        this.data.subscribe(data=>{
          this.toaster.setMessage('Data successfully deleted');
          this.toaster.present();
          this.navCtrl.setRoot(UgroupPage,{items:data})
          console.log(data);
        })
      }
    }

  }


