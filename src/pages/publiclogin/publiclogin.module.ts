import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicloginPage } from './publiclogin';

@NgModule({
  declarations: [
    PublicloginPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicloginPage),
  ],
})
export class PublicloginPageModule {}
