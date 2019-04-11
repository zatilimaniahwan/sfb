import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.page.html',
  styleUrls: ['./organization-form.page.scss'],
})
export class OrganizationFormPage implements OnInit {
  title='';
  organization:any={
    id:'',
    reg_no:'',
    org_name:'',
    address:'',
    state:'',
    email:'',
    tel_no:'',
    fax_no:''
  }
  organizationID='';
  data:Observable<any>;
  constructor(private modalCtrl:ModalController,private http:HttpClient ) { }

  previous(){
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.title='Add Data';
    
  }

}
