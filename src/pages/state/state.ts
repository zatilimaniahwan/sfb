import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import{ HttpClient} from '@angular/common/http';
import { StateformPage } from '../stateform/stateform';

/**
 * Generated class for the StatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {
  searchQuery: string = '';
  items: string[];
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.initializeItems();
  }
  initializeItems(){
    var url='http://localhost/api/smartfoodbank/state/list_state.php';
      this.data=this.http.get(url);
      this.data.subscribe(data=>{
        //console.log(data);
        this.items=data;
      });
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  create(){
    this.navCtrl.push(StateformPage);
  }
  edit(id) {
    this.navCtrl.push(StateformPage, {stateID: id})
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');
  }

}
