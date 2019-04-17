import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController, NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.page.html',
  styleUrls: ['./recipient-form.page.scss'],
})
export class RecipientFormPage implements OnInit {
  title='';
  recipient:any={
    id:'',
    fullname:'',
    ic:'',
    address:'',
    state:'',
    age:'',
    tel_no:'',
    family_no:'',
    income:'',
    status:''
  }
  recipientID='';
  data:Observable<any>;
  states:string[];
  btnSubmit=false;
  btnUpdate=false;
  btnClear=false;
  btnDelete=false;
  items:string[];
  constructor( private modalCtrl:ModalController,
    private http:HttpClient,
    private navParams:NavParams,
    private navCtrl:NavController,
    private toastCtrl:ToastController,
    private alertCtrl:AlertController) {  
   }
  previous(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.title='Add New Data';
    this.btnSubmit=true;
    this.btnClear=true;
    var url='http://localhost/smartfoodbank/state/states';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.states=data;
    });
    this.recipientID=this.navParams.get('value');
    if(this.recipientID !=null || this.recipientID!=undefined){
      this.title='Edit Data';
      this.data=this.http.get('http://localhost/smartfoodbank/recipient/recipientbyid?id='+this.recipientID);
      this.data.subscribe(data=>{
        this.recipient=data[0];
      });
      var url='http://localhost/smartfoodbank/state/states';
      this.data=this.http.get(url);
      this.data.subscribe(data=>{
        this.states=data;
      });
      this.btnSubmit=false;
      this.btnClear=false;
      this.btnUpdate=true;
      this.btnDelete=true;

    }
  }
  //Submit new data
  async submit(){
    //check whether the field is blank or not
    if(this.recipient.fullname==''|| this.recipient.ic==''|| this.recipient.address==''|| this.recipient.state==''||this.recipient.age==''||this.recipient.tel_no==''|| this.recipient.family_no==''||this.recipient.income==''){
      const toast = await this.toastCtrl.create({
        message: 'All fields are required.',
        duration: 2000
      });
      toast.present();
    }else{
      var url="http://localhost/smartfoodbank/recipient/addrecipient";
      this.data=this.http.post(url,this.recipient,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
    this.data.subscribe(async data=>{
      this.modalCtrl.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Data successfully added.',
        duration: 2000
      });
      toast.present();
      
     //this.navCtrl.navigateRoot(['/tabs/tab2',{items:data}]);
    })
  }
  }
   //Update current data
   async update(){
    if(this.recipientID !=''){
      var url='http://localhost/smartfoodbank/recipient/updaterecipient';
      this.data=this.http.post(url,this.recipient,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
      this.data.subscribe(async data=>{
        this.modalCtrl.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Data successfully updated.',
          duration: 2000
        });
        toast.present();
        this.navCtrl.navigateRoot(['/tabs/tab2',{items:data}]);
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
              if(this.recipientID !=''){
                var url='http://localhost/smartfoodbank/recipient/deleterecipient';
                this.data=this.http.post(url,this.recipient,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
                this.data.subscribe(async data=>{
                  this.modalCtrl.dismiss();
                  const toast = await this.toastCtrl.create({
                    message: 'Data successfully deleted.',
                    duration: 2000
                  });
                  toast.present();
                  this.navCtrl.navigateRoot(['/tabs/tab2',{items:data}]);
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
      this.recipient.fullname='';
      this.recipient.ic='';
      this.recipient.address='';
      this.recipient.state='';
      this.recipient.age='';
      this.recipient.income='';
      this.recipient.tel_no='';
      this.recipient.family_no='';
      this.recipient.status='';
    }

}
