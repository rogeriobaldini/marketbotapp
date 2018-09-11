import { GifChangeProvider } from './../gif-change/gif-change';
import { Injectable, EventEmitter } from '@angular/core';
import { Device } from '@ionic-native/device';
import { AlertController } from 'ionic-angular';

import { CallChatProvider } from './../call-chat/call-chat';
import { CallTtsProvider } from './../call-tts/call-tts';
import { SaveDataProvider } from './../save-data/save-data';

@Injectable()
export class ContextChatProvider {

  public arrayMensagens = [];
  private context = {};
  arrayMensagensEmitter = new EventEmitter<any>();

  constructor(private callChatProvider: CallChatProvider,
    private device: Device,
    private saveDataProvider: SaveDataProvider,
    private callTtsProvider: CallTtsProvider,
    private alertCtrl: AlertController,
    public gif: GifChangeProvider) { }

  popularChat(status, text, type) {
    if (status) {
      var obj = {
        "pStyle": "bubble",
        "type": type,
        "texto": text
      }
      this.arrayMensagens.push(obj)
    } else {
      var obj2 = {
        "pStyle": "bubble bubble-alt green",
        "type": type,
        "texto": text
      }
      this.arrayMensagens.push(obj2)
    }
    this.arrayMensagensEmitter.emit(this.arrayMensagens);
  }

  setTextUsuario(text, type) {

    let deviceID = this.device.uuid;
    let token: string = "";
    this.saveDataProvider.recoverLocalData("token").then((val) => {
      token = val;

      if (type == "voice") {
        this.gif.events.publish("gif", "classfyingGif");
      }

      this.popularChat(false, text, type);
      var obj = {
        "input": { "text": text },
        "context": this.context,
        "user": deviceID,
        "token": token
      }

      this.callChatProvider.setChatbot(obj).subscribe(
        res => {
          console.log(res);
          this.popularChat(true, res.output.text[0], "chatBot");
          this.context = res.context;
          console.log("resposta bot: ", res);

          if (type == "voice") {

            this.gif.events.publish("gif", "classfyingGif");

            this.callTtsProvider.synthesize(res.output.text[0]);
          }
        },
        err => {
          let erro: any = JSON.parse(err._body);
          console.log("teste erro", erro.error);
          this.presentAlert(erro.error);
        });
    });
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

}
