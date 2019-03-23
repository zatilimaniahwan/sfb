import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodbankPage } from './foodbank';

@NgModule({
  declarations: [
    FoodbankPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodbankPage),
  ],
})
export class FoodbankPageModule {}
