import { Component, ElementRef, NgZone, NgModule } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { StatusBar } from '@ionic-native/status-bar';

import { CallVoiceProvider } from './../../providers/call-voice/call-voice';
import { CallTtsProvider } from './../../providers/call-tts/call-tts';
import { ConfigPage } from './../../pages/config/config';
import { ContextChatProvider } from './../../providers/context-chat/context-chat';
import { GifChangeProvider } from './../../providers/gif-change/gif-change';
import { MyApp } from './../../app/app.component';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'voice-chat',
  templateUrl: 'voice-chat.html'
})


@NgModule({
  imports: [
      
   ],
  declarations: [
       VoiceChatComponent
  ],
  exports: [
    VoiceChatComponent
  ]
})

export class VoiceChatComponent {

  public imgPath: string;
  public tapOption: string;
  private listening: boolean = true;
  private timeoutId: number;
  public isWorking = true;
  private alertCtrl: AlertController;

  constructor(private toast: ToastController, private network: Network, private statusBar: StatusBar, public navCtrl: NavController,
    public callVoiceProvider: CallVoiceProvider, private contextChatProvider: ContextChatProvider,
    private speechRecognition: SpeechRecognition, public tts: CallTtsProvider, public gif: GifChangeProvider) {
    this.selectGif("waitingGif");

  }
  displayNetworkUpdate(connectionstate: string){

    this.toast.create({
      message: `Voce esta  ${connectionstate}`,
      duration: 3000
    }).present();


  }
  ngOnInit() {
    this.statusBar.backgroundColorByHexString("#000000");
    
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
            () => console.log('Granted'),
            () => console.log('Denied')
            )
        }
      })

    this.gif.events
      .subscribe("gif", res => this.selectGif(res));
  }

  pushPage(): void {
    this.navCtrl.push(ConfigPage, {
      type: 'push'
    });
  }

  startListening(): void {
  
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
            () => console.log('Granted'),
            () => console.log('Denied')
            )
        }
      })

      this.callVoiceProvider.startListening();
      this.isWorking = false;
      console.log("Start!!!!!!");  
  }
  stopListening(){
    this.callVoiceProvider.stopListening();
    this.isWorking = true;
    console.log("STOP!!!!!!");


  }

  private initRefresh() {
    this.refresh();
    this.timeoutId = setInterval(() => this.refresh(), 5 * 10);
  }

  private refresh() { }

  ionViewDidEnter() {
    this.initRefresh();
  }

  ionViewDidLeave() {
    this.stopRefresh();
    this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    },error => console.log(error));
    
  }

  private stopRefresh() {
    clearInterval(this.timeoutId);
  }

  selectGif(call: String): void {

    switch (call) {
      case "classfyingGif": {
        this.imgPath = "assets/imgs/watson_think.gif";
        this.tapOption = "Classifying";

        break;
      }
      case "listenGif": {
        this.imgPath = "assets/imgs/watson_listen.gif";
        this.tapOption = "Listening...";
        break;
      }
      case "listenGifIOS": {
        this.imgPath = "assets/imgs/watson_listen.gif";
        this.tapOption = "Listening. Type to send...";
        break;
      }
      case "speakGif": {
        this.imgPath = "assets/imgs/watson_speak.gif";
        this.tapOption = "Talking...";
        break;
      }
      case "synthesizingGif": {
        this.imgPath = "assets/imgs/watson_think.gif";
        this.tapOption = "Synthetizing...";
        break;
      }
      case "waitingGif": {
        this.imgPath = "assets/imgs/watson_idle.gif";
        this.tapOption = "Type here to talk to MarketBot!";
        break;
      }
      default: {
        this.imgPath = "assets/imgs/watson_idle.gif";
        this.tapOption = "Type here to talk to MarketBot!";
        this.listening = true;
        break;
      }
    }
    this.initRefresh();
  }

}
