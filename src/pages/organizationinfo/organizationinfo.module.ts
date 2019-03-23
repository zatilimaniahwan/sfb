import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationinfoPage } from './organizationinfo';

@NgModule({
  declarations: [
    OrganizationinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationinfoPage),
  ],
})
export class OrganizationinfoPageModule {}
