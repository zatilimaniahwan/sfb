import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    //this.router.navigateByUrl('');
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDMPAgokYzvVtLUUmMWQpPCvU_ZZ0ncM6o',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDMPAgokYzvVtLUUmMWQpPCvU_ZZ0ncM6o'
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
