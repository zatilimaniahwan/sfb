import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationinfoPage } from './donationinfo';

@NgModule({
  declarations: [
    DonationinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationinfoPage),
  ],
})
export class DonationinfoPageModule {}
