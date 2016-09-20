import { Component } from '@angular/core';
import { NavController,NavParams ,ViewController} from 'ionic-angular';
import {Http} from '@angular/http';


/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {
  private equipment:JSON;

  constructor(private navCtrl: NavController,public params: NavParams,  public viewCtrl: ViewController) {

    
  }


  onPageLoaded() {

      this.equipment = this.params.get('data');
  }

  dismiss() {

    this.viewCtrl.dismiss(console.log('set loading is true'));
  }

}
