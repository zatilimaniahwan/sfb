import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BankdataPage } from '../pages/bankdata/bankdata';
import { UgroupPage } from '../pages/ugroup/ugroup';
import { FoodbankPage } from '../pages/foodbank/foodbank';
import { BoxinfoPage } from '../pages/boxinfo/boxinfo';
import { BoxlocationPage } from '../pages/boxlocation/boxlocation';
import { OrganizationPage } from '../pages/organization/organization';
import { DonationPage } from '../pages/donation/donation';
import { AnnouncementPage } from '../pages/announcement/announcement';
import { ReceipentPage } from '../pages/receipent/receipent';
import { DonationinfoPage } from '../pages/donationinfo/donationinfo';
import { StaffPage } from '../pages/staff/staff';
import { RegisterPage } from '../pages/register/register';
import { IntroPage } from '../pages/intro/intro';
import { OfficeloginPage } from '../pages/officelogin/officelogin';
import { PublicloginPage } from '../pages/publiclogin/publiclogin';
import { RolePage } from '../pages/role/role';
import { ReportPage } from '../pages/report/report';
import { ReportdonationPage } from '../pages/reportdonation/reportdonation';
import { ReportrecipientPage } from '../pages/reportrecipient/reportrecipient';
import { UgroupformPage } from '../pages/ugroupform/ugroupform';
import { OrganizationformPage } from '../pages/organizationform/organizationform';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BankdataPage,
    UgroupPage,
    FoodbankPage,
    BoxinfoPage,
    BoxlocationPage,
    OrganizationPage,
    DonationPage,
    AnnouncementPage,
    ReceipentPage,
    DonationinfoPage,
    OrganizationPage,
    StaffPage,
    RegisterPage,
    IntroPage,
    OfficeloginPage,
    PublicloginPage,
    RolePage,
    ReportPage,
    ReportdonationPage,
    ReportrecipientPage,
    UgroupformPage,
    OrganizationformPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BankdataPage,
    UgroupPage,
    FoodbankPage,
    BoxinfoPage,
    BoxlocationPage,
    OrganizationPage,
    DonationPage,
    AnnouncementPage,
    ReceipentPage,
    DonationinfoPage,
    OrganizationPage,
    StaffPage,
    RegisterPage,
    IntroPage,
    OfficeloginPage,
    PublicloginPage,
    RolePage,
    ReportPage,
    ReportPage,
    ReportrecipientPage,
    ReportdonationPage,
    UgroupformPage,
    OrganizationformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
