import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usergroup-form',
  templateUrl: './usergroup-form.page.html',
  styleUrls: ['./usergroup-form.page.scss'],
})
export class UsergroupFormPage implements OnInit {
  title='Add Data';
  usergroup:any={
    id:'',
    code:'',
    desc:''
  }
  usergroupID='';
  data:Observable<any>;
  show=false;
  hide=true;
  constructor(public modalCtrl:ModalController,public http:HttpClient,public navParams:NavParams) { }

  ngOnInit() {
    this.usergroupID=this.navParams.get('value');
   if(this.usergroupID !=null || this.usergroupID != undefined){
     this.title='Edit Data';
     this.data=this.http.get('http://localhost/smartfoodbank/usergroup/usergroupbyid?id='+this.usergroupID);
      this.data.subscribe(data=>{
        this.usergroup=data[0];
        console.log(this.usergroup);
      });
      this.show=true;
      this.hide=false;
   }
  }

  previous(){
    this.modalCtrl.dismiss();
  }


  submit(){

  }

}
