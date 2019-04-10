import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  viewLogin(){
    this.navCtrl.navigateForward('login');
  }

  ngOnInit() {
  }

}
