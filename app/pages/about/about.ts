import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {MyDataService} from '../../providers/my-data-service/my-data-service';


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController,public params: NavParams,public loadingCtrl: LoadingController,public data: MyDataService) {

      console.log('about');

    let x =   this.params.data;
    console.log(x);

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
