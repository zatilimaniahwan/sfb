import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController, NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usergroup-form',
  templateUrl: './usergroup-form.page.html',
  styleUrls: ['./usergroup-form.page.scss'],
})
export class UsergroupFormPage implements OnInit {
  // Declare variable, array and object
  title='';
  public usergroupForm: FormGroup;
  usergroup:any={
    id:'',
    code:'',
    desc:''
  }
  usergroupID='';
  data:Observable<any>;
  btnSubmit=false;
  btnUpdate=false;
  btnClear=false;
  btnDelete=false;
  toaster:any;
  items:string[];
  constructor(
    private modalCtrl:ModalController,
    private http:HttpClient,
    private navParams:NavParams,
    private toastCtrl:ToastController,
    private navCtrl:NavController,
    private alertCtrl:AlertController,
    public formBuilder: FormBuilder) { 
      this.usergroupForm = formBuilder.group({
        code: ['', Validators.compose([Validators.maxLength(3), Validators.pattern('[a-zA-Z]*'),Validators.required])],
        desc: ['', Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])]
    });
    }

  // State when ionic in ready state
  ngOnInit() {
    this.title='Add New Data';
    this.btnSubmit=true;
    this.btnClear=true;
    this.usergroupID=this.navParams.get('value');
   if(this.usergroupID !=null || this.usergroupID != undefined){
     this.title='Edit Data';
     this.data=this.http.get('http://localhost/smartfoodbank/usergroup/usergroupbyid?id='+this.usergroupID);
      this.data.subscribe(data=>{
        this.usergroup=data[0];
      });
      this.btnSubmit=false;
      this.btnUpdate=true;
      this.btnClear=false;
      this.btnDelete=true;
   }
  }
//close modal and back to previous page
  previous(){
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
    this.data=this.http.get(url);
    this.data.subscribe(async data=>{
      this.items=data;
      this.modalCtrl.dismiss(this.items);
    })
  }
  //Submit new data
  async submit(){
    //check whether the field is blank or not
    if(this.usergroup.code==''|| this.usergroup.desc==''){
      const toast = await this.toastCtrl.create({
        message: 'All fields are required.',
        duration: 2000
      });
      toast.present();
    }else{
      var url="http://localhost/smartfoodbank/usergroup/addusergroup";
      this.data=this.http.post(url,this.usergroup,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
    }
    this.data.subscribe(data=>{
      this.onModalCloseCreate()
     })
  }
  onModalCloseCreate(){
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
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
    if(this.usergroupID !=''){
      var url='http://localhost/smartfoodbank/usergroup/updateusergroup';
      this.data=this.http.post(url,this.usergroup,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
      this.data.subscribe(data=>{
        this.onModalCloseUpdate()
       })
    }
  }
  onModalCloseUpdate(){
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
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
          handler:(blah)=>{
            this.alertCtrl.dismiss();
          }},
          {
            text:'Confirm',
            handler:()=>{
              if(this.usergroupID !=''){
                var url='http://localhost/smartfoodbank/usergroup/deleteusergroup';
                this.data=this.http.post(url,this.usergroup,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
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
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
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
    this.usergroupForm = this.formBuilder.group({
     code:'',
     desc:''
  
  });
  }
}
