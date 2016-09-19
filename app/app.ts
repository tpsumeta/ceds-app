import { Component } from '@angular/core';
import { Platform, ionicBootstrap} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import {MyDataService} from './providers/my-data-service/my-data-service';
import {MySharedService} from './providers/my-shared-service/my-shared-service';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  public rootPage: any;
  public myData;

  constructor(private platform: Platform,private service:MySharedService) {
    this.rootPage = TabsPage;


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();



    });
  }


  setData() {
    this.service.setData({ attr: 'some value' });
  }


}

ionicBootstrap(MyApp,[MyDataService,MySharedService]);
