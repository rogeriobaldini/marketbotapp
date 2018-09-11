import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { SaveDataProvider } from './../save-data/save-data';
import { appendNgContent } from '../../../node_modules/@angular/core/src/view/ng_content';

@Injectable()
export class CallChatProvider {

  private headers: Headers;
  private options: RequestOptions;

  private username: string;
  private password: string;
  private workspaceId: string;
  private target: string;

  constructor(public http: Http,
              private saveDataProvider: SaveDataProvider,
              private alertCtrl: AlertController) {

    this.headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 'Accept': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers });

    this.saveDataProvider.userEmitter.subscribe(res => this.username = res);
    this.saveDataProvider.passwordEmitter.subscribe(res => this.password = res);
    this.saveDataProvider.workspaceIdEmitter.subscribe(res => this.workspaceId = res);
    this.saveDataProvider.targetEmitter.subscribe(res => this.target = res);

    this.setCredentials();
  }

  setChatbot(inputParam): Observable<any> {
    
      console.log("=== Orquestrador ===");
      const html = "https://orchalexa.mybluemix.net/marketbotapp";
      return this.http
        .post(html, inputParam, this.options)
        .map(this.extractData).catch(this.handleError)
    
  }

  setCredentials() {
    this.saveDataProvider.recoverLocalData("username").then(val => this.username = val);
    this.saveDataProvider.recoverLocalData("password").then(val => this.password = val);
    this.saveDataProvider.recoverLocalData("workspaceId").then(val => this.workspaceId = val);
    this.saveDataProvider.recoverLocalData("radio").then(val => this.target = val);
  }

  presentAlert(errorMsg: string) {
    let alert = this.alertCtrl.create({
      title: 'Algo não está certo',
      subTitle: errorMsg,
      buttons: [{
        text: 'Ok',
        role: 'Ok'
      }]
    });
    alert.present();
  }

  private extractData(res: Response) {
    console.log("=== extractData   = "+res);
    let body = res.json();

    return body || {};
  }

  private handleError(error: any): Observable<any> {
    console.log("=== handleError   = "+error);
    return Observable.throw(error);
  }

}
