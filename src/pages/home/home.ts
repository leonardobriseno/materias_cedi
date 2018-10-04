import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { AppsPage } from '../apps/apps';
import { ComPage } from '../com/com';
import { RoboticaPage } from '../robotica/robotica';
import { PyePage } from '../pye/pye';
import { CssPage } from '../css/css';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  apps = AppsPage;
  com = ComPage;
  robotica = RoboticaPage;
  pye = PyePage;
  css = CssPage;
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
  clickRobotica ()
  {
    this.navCtrl.push (this.robotica);
  }
  clickPye ()
  {
    this.navCtrl.push (this.pye);
  }
  clickCss ()
  {
    this.navCtrl.push (this.css);
  }
}
