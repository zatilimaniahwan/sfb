import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UgroupformPage } from '../ugroupform/ugroupform';

/**
 * Generated class for the UgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ugroup',
  templateUrl: 'ugroup.html',
})
export class UgroupPage {
  searchQuery:string='';
  items:string[];
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.initializeItems();
  }
  initializeItems(){
    var url='http://localhost/smartfoodbank/usergroup/usergroups';
      this.data=this.http.get(url);
      this.data.subscribe(data=>{
        //console.log(data);
        this.items=data;
      });
  }
  create(){
    this.navCtrl.push(UgroupformPage);
  }
  edit(id){
    this.navCtrl.push(UgroupformPage,{ugroupID: id});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UgroupPage');
  }


}
