import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams,ToastController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.page.html',
  styleUrls: ['./organization-form.page.scss'],
})
export class OrganizationFormPage implements OnInit {
  //Declare variable,object and array
  title='';
  public orgForm: FormGroup;
  organization:any={
    id:'',
    reg_no:'',
    code:'',
    org_name:'',
    address:'',
    state_id:'',
    email:'',
    tel_no:'',
    fax_no:''
  }
  organizationID='';
  data:Observable<any>;
  states:string[];
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
    private alertCtrl:AlertController,
    public formBuilder: FormBuilder ) { 
      this.orgForm = formBuilder.group({
        reg_no: ['', Validators.compose([Validators.pattern('[a-zA-Z][0-9]*'),Validators.required])],
        code: ['', Validators.compose([Validators.maxLength(3), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        org_name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        address: ['', Validators.compose([Validators.required])],
        state_id: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required,Validators.email])],
        tel_no: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
        fax_no: ['', Validators.compose([Validators.pattern('[0-9]*')])]
    });
    }
//State when ionic in ready state
  ngOnInit() {
    this.title='Add New Data';
    this.btnSubmit=true;
    this.btnClear=true;
    var url='http://localhost/smartfoodbank/state/states';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.states=data;
    });
    this.organizationID=this.navParams.get('value');
    if(this.organizationID !=null || this.organizationID !=undefined){
      this.title='Edit Data';
      this.data=this.http.get('http://localhost/smartfoodbank/organization/organizationbyid?id='+this.organizationID);
      this.data.subscribe(data=>{
        this.organization=data[0];
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
  //Close modal and back to previous page
  previous(){
    var url='http://localhost/smartfoodbank/organization/organizations';
    this.data=this.http.get(url);
    this.data.subscribe(async data=>{
      this.items=data;
      this.modalCtrl.dismiss(this.items);
    })
  }
  //Submit new data
  async submit(){
    //check whether the field is blank or not
    if(this.organization.reg_no==''|| this.organization.org_name==''|| this.organization.address==''|| this.organization.tel_no==''||this.organization.email==''){
      const toast = await this.toastCtrl.create({
        message: 'All fields are required.',
        duration: 2000
      });
      toast.present();
    }else{
      var url="http://localhost/smartfoodbank/organization/addorganization";
      this.data=this.http.post(url,this.organization,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
    
    this.data.subscribe(async data=>{
      this.onModalCloseCreate();
    });
  }
  }
  onModalCloseCreate(){
    var url='http://localhost/smartfoodbank/organization/organizations';
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
    if(this.organizationID !=''){
      var url='http://localhost/smartfoodbank/organization/updateorganization';
      this.data=this.http.post(url,this.organization,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
      this.data.subscribe(data=>{
        this.onModalCloseUpdate()
       })
    }
  }
  onModalCloseUpdate(){
    var url='http://localhost/smartfoodbank/organization/organizations';
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
              if(this.organizationID !=''){
                var url='http://localhost/smartfoodbank/organization/deleteorganization';
                this.data=this.http.post(url,this.organization,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
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
    var url='http://localhost/smartfoodbank/organization/organizations';
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
    this.orgForm = this.formBuilder.group({
      reg_no: '',
      code: '',
      org_name: '',
      address: '',
      state_id: '',
      email: '',
      tel_no:'',
      fax_no: ''
  
  });
  }

}
