import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any={
    email:'',
    password:''
  }
  toaster:any;
  constructor(private navCtrl:NavController,private toastCtrl:ToastController) { 
    
  }
  previous(){
    this.navCtrl.navigateForward('role');
  }
  async submit(){
    if(this.login.email=='' && this.login.password==''){
      const toast = await this.toastCtrl.create({
        message: 'Email or password cannot be empty.',
        duration: 2000
      });
      toast.present();
    }
    else{
      this.navCtrl.navigateForward('');
    }
  }

  ngOnInit() {
  }

}
