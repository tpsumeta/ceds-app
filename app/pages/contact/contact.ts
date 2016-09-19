import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController) {

    // let db = new SQLite();
    // db.openDatabase({
    //   name: 'data.db',
    //   location: 'default' // the location field is required
    // }).then(() => {
    //   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
    //     console.log('create table success');
    //   }, (err) => {
    //     console.error('Unable to execute sql: ', err);
    //   });
    // }, (err) => {
    //   console.error('Unable to open database: ', err);
    // });


  }
}
