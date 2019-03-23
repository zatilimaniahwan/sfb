import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoxinfoPage } from './boxinfo';

@NgModule({
  declarations: [
    BoxinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BoxinfoPage),
  ],
})
export class BoxinfoPageModule {}
