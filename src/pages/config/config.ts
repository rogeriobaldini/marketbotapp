import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SaveDataProvider } from './../../providers/save-data/save-data';


@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  private username: string;
  private password: string;
  private workspaceId: string;
  private token: string;
  private bee: boolean = true;
  private generic: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private saveDataProvider: SaveDataProvider) {
  }

  ionViewDidLoad() {
    this.saveDataProvider.recoverLocalData("username").then((val) => {
      this.username = val;
    });
    this.saveDataProvider.recoverLocalData("password").then((val) => {
      this.password = val;
    });
    this.saveDataProvider.recoverLocalData("workspaceId").then((val) => {
      this.workspaceId = val;
    });
    this.saveDataProvider.recoverLocalData("token").then((val) => {
      this.token = val;
    });
    this.saveDataProvider.recoverLocalData("radio").then((val) => {
      if (val == "bee") {
        this.bee = true;
        this.generic = false;
      } else {
        this.bee = false;
        this.generic = true;
      }
    });
  }

  setCampoValor(campo: string, valor: string): void {
    this.saveDataProvider.saveLocaData(campo, valor);
  }

}
