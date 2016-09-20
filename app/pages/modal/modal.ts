import { Component } from '@angular/core';
import { NavController,NavParams ,ViewController} from 'ionic-angular';

/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {
  character;

  constructor(private navCtrl: NavController,public params: NavParams,  public viewCtrl: ViewController) {

    var characters = [
          {
            name: 'Gollum',
            quote: 'Sneaky little hobbitses!',
            image: 'img/avatar-gollum.jpg',
            items: [
              { title: 'Race', note: 'Hobbit' },
              { title: 'Culture', note: 'River Folk' },
              { title: 'Alter Ego', note: 'Smeagol' }
            ]
          },
          {
            name: 'Frodo',
            quote: 'Go back, Sam! I\'m going to Mordor alone!',
            image: 'img/avatar-frodo.jpg',
            items: [
              { title: 'Race', note: 'Hobbit' },
              { title: 'Culture', note: 'Shire Folk' },
              { title: 'Weapon', note: 'Sting' }
            ]
          },
          {
            name: 'Samwise Gamgee',
            quote: 'What we need is a few good taters.',
            image: 'img/avatar-samwise.jpg',
            items: [
              { title: 'Race', note: 'Hobbit' },
              { title: 'Culture', note: 'Shire Folk' },
              { title: 'Nickname', note: 'Sam' }
            ]
          }
        ];

  this.character = this.params.get('charNum');

  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
