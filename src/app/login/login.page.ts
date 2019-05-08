import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

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
  staffID='';
  loginToken='';
  toaster:any;
  constructor(
    private navCtrl:NavController,
    private toastCtrl:ToastController,
    private http:HttpClient
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
        data.forEach(element => {
          this.loginToken=element['login_token'];
        });
        if(this.loginToken!='' && this.loginToken!=undefined){
          this.navCtrl.navigateForward('');
        }
       else{
         return;
       }
      })
      
    }
  }
 

  ngOnInit() {
  }

}
