import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { AppsPage } from '../apps/apps';
import { ComPage } from '../com/com';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  apps = AppsPage;
  com = ComPage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria ()
  {
    this.navCtrl.push (this.historia);
  }
  clickDibujo ()
  {
    this.navCtrl.push (this.dibujo);
  }
  clickApps ()
  {
    this.navCtrl.push (this.apps);
  }
  clickCom ()
  {
    this.navCtrl.push (this.com);
  }
}
