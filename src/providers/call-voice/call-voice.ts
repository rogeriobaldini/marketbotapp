import { GifChangeProvider } from './../gif-change/gif-change';
import { VoiceChatComponent } from './../../components/voice-chat/voice-chat';
import { Injectable, EventEmitter } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { ContextChatProvider } from '../context-chat/context-chat';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { delay } from 'rxjs/operator/delay';
import { Platform } from 'ionic-angular';

@Injectable()
export class CallVoiceProvider {

  private isRecording = false;


  constructor(private contextChatProvider: ContextChatProvider, public speechRecognition: SpeechRecognition,
    public gif: GifChangeProvider, public platform: Platform) { }

    
  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
      this.gif.events.publish("gif", "waitingGif");
      
    });
  }

  startListening() {

    if (this.platform.is('ios')) {
      this.gif.events.publish("gif", "listenGifIOS");
    } else {
      this.gif.events.publish("gif", "listenGif");      
    }

    let options = {
      // Android only
      language: 'pt-BR',
      showPopup: false  // Android only 
    }
      //debugger;
      this.speechRecognition.startListening(options)
        .subscribe(matches => {
          if(true){

          }
          this.contextChatProvider.setTextUsuario(matches[0], "voice")
          console.log(matches[0]);

        });
    this.isRecording = true;
    if(this.platform.is('ios')){
      (async () => {
        const delay = time => new Promise(res => setTimeout(() => res(), time));
        await delay(3000);
        this.stopListening();
      })();
    }

  }

}
