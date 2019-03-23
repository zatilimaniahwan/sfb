import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankdataPage } from './bankdata';

@NgModule({
  declarations: [
    BankdataPage,
  ],
  imports: [
    IonicPageModule.forChild(BankdataPage),
  ],
})
export class BankdataPageModule {}
