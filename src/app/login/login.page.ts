import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data:Observable<any>;
  login:any={
    staff_code:'',
    password:''
  }
  toaster:any;
  constructor(
    private navCtrl:NavController,
    private toastCtrl:ToastController,
    private http:HttpClient,
    private storage:Storage
    ) { 
    
  }
  previous(){
    this.navCtrl.navigateForward('role');
  }
  async submit(){
    if(this.login.staff_code=='' && this.login.password==''){
      const toast = await this.toastCtrl.create({
        message: 'Staff code or password cannot be empty.',
        duration: 2000
      });
      toast.present();
    }
    else{
      var url="http://localhost/smartfoodbank/staff/login";
      this.data=this.http.post(url,this.login,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
      this.data.subscribe(data=>{
        this.storage.set('staff_code',data[0].staff_code);
        this.storage.set('fullname',data[0].fullname);
        this.storage.set('usergroup',data[0].usergroup);
        this.navCtrl.navigateForward('');
      })
      
    }
  }

  ngOnInit() {
  }

}
