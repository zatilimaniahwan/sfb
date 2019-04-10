import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsergroupFormPage } from './usergroup-form.page';

const routes: Routes = [
  {
    path: '',
    component: UsergroupFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsergroupFormPage]
})
export class UsergroupFormPageModule {}
