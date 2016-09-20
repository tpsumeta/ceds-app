import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

  searchQuery: string = '';
  items:any;
  api:string = 'http://ceds.dusit.ac.th/api/getReport?code_faculty=all&code_department=all&staff_type=all&code_person=&location_id=all&building_id=all&floor_id=all&room_id=all&n_id=all&durablegoods_id=all&type_id=all&brend_id=all&g_id=all&_=1474276776066';
  posts:JSON;


  constructor(public navCtrl: NavController,private http: Http,public loadingCtrl: LoadingController) {

       this.initializeItems();

  }

  initializeItems() {
     this.http.get(this.api).map(res => res.json()).subscribe(data => {
       this.posts = data.data;
    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่...",
      duration: 300
    });
    loader.present();
  }


  getItems(ev: any) {
    // Reset items back to all of the items
   let val = ev.target.value;
   this.presentLoading();
   if (val && val.trim() !== '') {
       this.items = this.posts;

       this.items = this.items.filter((item) => {
           console.log('item',item);
        return (item.first_name_tha.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    };


  }
}
