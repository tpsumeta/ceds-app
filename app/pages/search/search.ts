import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchPage {
  api:string = 'http://ceds.dusit.ac.th/api/getReport?code_faculty=11&code_department=all&staff_type=all&code_person=&location_id=all&building_id=all&floor_id=all&room_id=all&n_id=all&durablegoods_id=all&type_id=all&brend_id=all&g_id=all&_=1474276776066';
  posts;

  constructor(private navCtrl: NavController,private http: Http) {

  }

  search(){

    this.http.get(this.api).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log('search');
      console.log(this.posts);
   });

  }

}
