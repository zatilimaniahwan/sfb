import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usergroup-form',
  templateUrl: './usergroup-form.page.html',
  styleUrls: ['./usergroup-form.page.scss'],
})
export class UsergroupFormPage implements OnInit {
  title='';
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
  constructor(private modalCtrl:ModalController,private http:HttpClient,private navParams:NavParams,private toastCtrl:ToastController,private navCtrl:NavController) { }

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
        console.log(this.usergroup);
      });
      this.btnSubmit=false;
      this.btnUpdate=true;
      this.btnClear=false;
      this.btnDelete=true;
   }
  }

  previous(){
    this.modalCtrl.dismiss();
  }

  async submit(){
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
    this.data.subscribe(async data=>{
      this.modalCtrl.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Data successfully added.',
        duration: 2000
      });
      toast.present();
      this.navCtrl.navigateRoot(['usergroup',{items:data}]);
    })

  }

}
