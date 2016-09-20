import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import { ModalPage } from './../modal/modal';

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

  constructor(private _nav: NavController,
    private _params: NavParams,public modalCtrl: ModalController) {

  }


  onPageLoaded() {
    this.eventId = this._params.get('eventId');
    this.eventTitle = this._params.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;
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
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }


  private goToResult(barcodeData) {
    // this._nav.push(ScanResultPage, {
    //   scannedText: barcodeData.text
    // });
    this.presentModal(barcodeData);
  }

  presentModal(barcode) {
     let modal = this.modalCtrl.create(ModalPage,barcode);
     modal.present();
   }
   


}
