import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BankdataPage } from '../pages/bankdata/bankdata';
import { DonationPage } from '../pages/donation/donation';
import { OrganizationPage } from '../pages/organization/organization';
import { FoodbankPage } from '../pages/foodbank/foodbank';
import { ReportPage } from '../pages/report/report';
import { AnnouncementPage } from '../pages/announcement/announcement';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: HomePage, icon:'home' },
     // { title: 'List', component: ListPage },
      {title:'Donation', component:DonationPage,icon:'hand'},
      {title:'Report', component:ReportPage,icon:'stats'},
      {title:'Organization',component:OrganizationPage,icon:'contacts'},
      {title:'Food Bank Box',component:FoodbankPage,icon:'cube'},
      {title:'Bank Data', component:BankdataPage,icon:'list'},
      {title:'Announcement',component:AnnouncementPage,icon:'megaphone'}
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
