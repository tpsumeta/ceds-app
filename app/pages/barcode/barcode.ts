import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import { ModalPage } from './../modal/modal';
import {Http} from '@angular/http';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the BarcodePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/barcode/barcode.html',
})
export class BarcodePage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;
  public modal;
  public api: string = 'http://ceds.dusit.ac.th/equipment/getBySerial';

  constructor(private _nav: NavController,
    private _params: NavParams, public modalCtrl: ModalController,
    private http: Http, public toastCtrl: ToastController) {




  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'ไม่พบข้อมูล',
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }


  onPageLoaded() {
    this.eventId = this._params.get('eventId');
    this.eventTitle = this._params.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public openModal() {

    this.goToResult("46LBP1S");
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;

    BarcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.goToResult(barcodeData.text);
    }, (err) => {
      console.log(err);
    });
  }


  private goToResult(barcodeData) {

    this.presentModal(barcodeData);
  }

  presentModal(barcode) {
    this.http.get(this.api + '?serial=' + barcode).map(res => res.json()).subscribe(data => {
      if (data[0]) {
        this.modal = this.modalCtrl.create(ModalPage, { data: data[0] });
        this.modal.present();

      } else {
        this.presentToast();
      }
      this.loading = false;
    });




  }







}
