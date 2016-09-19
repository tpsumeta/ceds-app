import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyDataService {
  private data:any;
  private api:string;

  constructor(public http: Http) {
    this.http = http;
    this.api = 'http://ceds.dusit.ac.th/api/getReport?code_faculty=all&code_department=all&staff_type=all&code_person=&location_id=all&building_id=all&floor_id=all&room_id=all&n_id=all&durablegoods_id=all&type_id=all&brend_id=all&g_id=all&_=1474276776066';

  }


  retrieveData() {

  this.http.get(this.api).map(res => res.json()).subscribe(data => {
      this.data = data;
      console.log(data);
    }, error => {
      console.log('Error with http.get: ', error);
    });
}

}
