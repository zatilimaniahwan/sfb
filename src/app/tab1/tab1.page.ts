import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { FoodbankFilterPage } from '../foodbank-filter/foodbank-filter.page';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  map: GoogleMap;
  address:string;
constructor(public modalCtrl:ModalController,public platform:Platform,public toastCtrl:ToastController, private androidPermissions: AndroidPermissions,
  private geolocation: Geolocation,
  private locationAccuracy: LocationAccuracy){}
ngOnInit() {
  this.platform.ready();
  this.loadMap();
}
loadMap() {
  this.map = GoogleMaps.create('map_canvas', {
    camera: {
      target: {
        lat: 3.027984,
        lng: 101.777304
        },
         zoom: 18,
         tilt: 30
    }
  });
  this.goToMyLocation();
}
checkGPSPermission() {
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
    result => {
      if (result.hasPermission) {

        //If having permission show 'Turn On GPS' dialogue
        this.askToTurnOnGPS();
      } else {

        //If not having permission ask for permission
        this.requestGPSPermission();
      }
    },
    err => {
      alert(err);
    }
  );
}
requestGPSPermission() {
  this.locationAccuracy.canRequest().then((canRequest: boolean) => {
    if (canRequest) {
      console.log("4");
    } else {
      //Show 'GPS Permission Request' dialogue
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        .then(
          () => {
            // call method to turn on GPS
            this.askToTurnOnGPS();
          },
          error => {
            //Show alert if user click on 'No Thanks'
            alert('requestPermission Error requesting location permissions ' + error)
          }
        );
    }
  });
}

askToTurnOnGPS() {
  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    () => {
      // When GPS Turned ON call method to get Accurate location coordinates
      this.goToMyLocation();
    },
    error => alert('Error requesting location permissions ' + JSON.stringify(error))
  );
}


goToMyLocation(){
  this.map.clear();

  // Get the location of you
  this.map.getMyLocation().then((location: MyLocation) => {
    console.log(JSON.stringify(location, null ,2));

    // Move the map camera to the location with animation
    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      duration: 5000
    });

    //add a marker
    let marker: Marker = this.map.addMarkerSync({
      title: '@ionic-native/google-maps plugin!',
      snippet: 'This plugin is awesome!',
      position: location.latLng,
      animation: GoogleMapsAnimation.BOUNCE
    });

    //show the infoWindow
    marker.showInfoWindow();

    //If clicked it, display the alert
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.showToast('clicked!');
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      (data) => {
          console.log("Click MAP",data);
      }
    );
  })
  .catch(err => {
    //this.loading.dismiss();
    this.showToast(err.error_message);
  });
}
async showToast(message: string) {
  let toast = await this.toastCtrl.create({
    message: message,
    duration: 2000,
    position: 'middle'
  });
  toast.present();
}
async view(){
  const modal=await this.modalCtrl.create({
    component:FoodbankFilterPage,
  });
  return await modal.present();
}
}

