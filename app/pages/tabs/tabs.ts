import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BarcodePage } from '../barcode/barcode';
import { SearchPage } from '../search/search';
import {MyDataService} from '../../providers/my-data-service/my-data-service';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;
  public tab5Root: any;
  public mydata: any;

  constructor(public data: MyDataService) {

  //  this.mydata = this.data.retrieveData();
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
    this.tab4Root = BarcodePage;
    this.tab5Root = SearchPage;
  }
}
