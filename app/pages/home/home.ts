import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import {MyDataService} from '../../providers/my-data-service/my-data-service';
import { Http } from '@angular/http';





@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public items;
  public posts;


  constructor(public navCtrl: NavController,public params: NavParams,public loadingCtrl: LoadingController,public data: MyDataService,public http: Http) {


    let  api = 'http://ceds.dusit.ac.th/api/getReport?code_faculty=all&code_department=all&staff_type=all&code_person=&location_id=all&building_id=all&floor_id=all&room_id=all&n_id=all&durablegoods_id=all&type_id=all&brend_id=all&g_id=all&_=1474276776066';


      this.http.get(api).map(res => res.json()).subscribe(data => {
          this.items = data.data;
          this.posts = data.data;
        }, error => {
          console.log('Error with http.get: ', error);
        });





  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่...",
      duration: 3000
    });
    loader.present();
  }






getItems(ev: any) {
  // Reset items back to all of the items
 let val = ev.target.value;
 if (val && val.trim() != '') {
   this.presentLoading();
   this.items = this.posts;
     this.items = this.items.filter((item) => {
      return (item.serial.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });


  }


}




}
