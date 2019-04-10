import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.page.html',
  styleUrls: ['./recipient-form.page.scss'],
})
export class RecipientFormPage implements OnInit {
  title='Add Data';
  data:Observable<any>;
  states:string[];
  constructor(public modalCtrl:ModalController,public http:HttpClient) {
    
    
   }
  previous(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    var url='http://localhost/smartfoodbank/state/states';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.states=data;
    });
    
    
  }

}
