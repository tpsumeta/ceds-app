import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the MySharedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MySharedService {

 public data;
 public dataChange: Observable<any>;
 public dataChangeObserver: any;

 constructor() {
   this.dataChange = new Observable(observer => {

     this.dataChangeObserver = observer;
   });
 }


 setData(data:any) {
   this.dataChangeObserver.next(this.data);
 }

}
