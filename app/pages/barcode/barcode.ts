import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import { ModalPage } from './../modal/modal';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
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


  presentToast(massage) {
    let toast = this.toastCtrl.create({
      message: massage,
      duration: 5000,
      position: 'top',
    });
    toast.present();
  }


  onPageLoaded() {
    this.eventId = this._params.get('eventId');
    this.eventTitle = this._params.get('eventTitle');

    this.buttonText = "สแกน";
    this.loading = false;
  }

  public openModal() {
    console.log('openModal');
    this.presentModal("SDUARIT007544");
  }

  public scanQR() {
    this.buttonText = "กำลังโหลดข้อมูล...";
    this.loading = true;

    BarcodeScanner.scan().then((barcodeData) => {
      // if event cancled
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "สแกน";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
        this.presentModal(barcodeData.text);
        //this.buttonText = "สแกน";
        this.loading = false;
    }, (err) => {
      console.log(err);
    });
  }


  presentModal(barcode) {
    console.log('barcode ',barcode);
    this.http.get(this.api + '?barcode=' + barcode).map(res => res.json()).subscribe(data => {
      if (data) {
        console.log('data',data);
        this.modal = this.modalCtrl.create(ModalPage, { data: data });
        this.modal.present();

      } else {
        this.loading = false;
        this.presentToast('ไม่พบข้อมูล');
      }
    }),
    err=> function(){
        console.error('Can not connect Server');
        this.presentToast('ไม่พบสามารถติดต่อ Server ได้');
    }




  }







}
