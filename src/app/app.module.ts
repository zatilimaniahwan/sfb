import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodbankFilterPageModule } from './foodbank-filter/foodbank-filter.module';
import { RecipientFormPageModule } from './recipient-form/recipient-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsergroupFormPageModule } from './usergroup-form/usergroup-form.module';
import { OrganizationFormPageModule } from './organization-form/organization-form.module';
import { StaffFormPageModule } from './staff-form/staff-form.module';
import { BoxinfoFormPageModule } from './boxinfo-form/boxinfo-form.module';
import { AuthModule } from  './auth/auth.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FoodbankFilterPageModule,
    RecipientFormPageModule,
    FormsModule,
    UsergroupFormPageModule,
    OrganizationFormPageModule,
    StaffFormPageModule,
    BoxinfoFormPageModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
