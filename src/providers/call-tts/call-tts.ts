import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Media, MediaObject, MEDIA_STATUS } from '@ionic-native/media';
import { AlertController, Platform } from 'ionic-angular';

import { File, FileEntry } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

import { CallVoiceProvider } from './../call-voice/call-voice';
import { GifChangeProvider } from './../gif-change/gif-change';
import { SaveDataProvider } from './../save-data/save-data';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Injectable()
export class CallTtsProvider {

  constructor(public file: File,
    public txfr: FileTransfer,
    public http: Http,
    private Data: SaveDataProvider,
    public media: Media,
    public gif: GifChangeProvider,
    public platform: Platform,
    private tts: TextToSpeech) { }

  synthesize(text: any) {

    this.gif.events.publish("gif", "speakGif");

    this.tts.speak({
      text: text,
      locale: 'en-US',
      rate: 1.5
    })
      .then(() => {
        console.log('Success tts.speak: ' + text);
        this.gif.events.publish("gif", "waitingGif");
      })
      .catch((reason: any) => console.log('Success tts.speak: ' + reason));

  }
}
