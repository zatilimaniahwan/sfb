import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BoxinfoFormPage } from './boxinfo-form.page';

const routes: Routes = [
  {
    path: '',
    component: BoxinfoFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BoxinfoFormPage]
})
export class BoxinfoFormPageModule {}
