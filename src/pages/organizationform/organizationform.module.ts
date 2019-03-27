import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationformPage } from './organizationform';

@NgModule({
  declarations: [
    OrganizationformPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationformPage),
  ],
})
export class OrganizationformPageModule {}
