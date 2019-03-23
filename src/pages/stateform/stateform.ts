import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the StateformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stateform',
  templateUrl: 'stateform.html',
})
export class StateformPage {
  data:Observable<any>;
  state:any={
    code:'',
    desc:'',
  }
  title='';
  header:any={};
  stateID='';
  toaster:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public toastCtrl:ToastController) {
  this.title='Add New';
  this.stateID=navParams.get("stateID");
  if(this.stateID !=null || this.stateID !=undefined){
    this.title='Edit Record';
  }
  this.toaster=this.toastCtrl.create({
    duration:3000,
    position:'bottom'
  });
  }

  ionViewDidLoad(id) {
    if(this.stateID!= null){
      var url='http://localhost/api/smartfoodbank/state/detail_state.php';
      this.data=this.http.post(url,{id:this.stateID},this.header);
      this.data.subscribe(data=>{
        this.state=data;
        console.log(data);
      })
    }
 
  }
  /*save(){
    if(this.state.code==''|| this.state.desc==''){
      this.toaster.setMessage('All fields are required');
      this.toaster.present();
    }else{
      var url='http://localhost/api/smartfoodbank/state/add_state.php';
      if(this.stateID){
        url='http://localhost/api/smartfoodbank/state/edit_state.php';
      }
      this.http.post(url,this.state,this.header)
      .then((res)=>{
        try{
          console.log(res);
          var data=JSON.parse(res.data)
          this.toaster.setMessage(data.message);
          this.toaster.present();
        }catch(e){
          console.error('JSON parsing error');
        }
        setTimeout(()=>{
          this.navCtrl.pop();
        },300)
      }).catch(e=>{
        console.log(e);
      });
    }
  }*/
/*deleteState(){
var url='http://localhost/api/smartfoodbank/state/add_state.php';
this.http.post(url,{id:this.stateID},this.header)
.then((res)=>{
  try{
    console.log(res);
    var data=JSON.parse(res.data)
    this.toaster.setMessage(data.message);
    this.toaster.present();
  }catch(e){
    console.error('JSON parsing error');
  }
  setTimeout(()=>{
    this.navCtrl.pop();
  },300)
}).catch(e=>{
console.log(e);
});
}*/
}
