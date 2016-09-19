import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {MyDataService} from '../../providers/my-data-service/my-data-service';


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public data: MyDataService) {


  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
    });
    loader.present();
  }

  sync(){
    this.data.retrieveData();
    this.presentLoading();

  }
}
