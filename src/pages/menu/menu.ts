import { SobrePage } from './../sobre/sobre';
import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  options: Array<{ component: any, title: string }>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    this.options = [
      { component: SobrePage, title: 'Sobre o projeto' },
    ]
  }

  goToPage(page: any) {
    this.navCtrl.push(page);
    this.close();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
