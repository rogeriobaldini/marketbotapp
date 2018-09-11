import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Media, MediaObject, MEDIA_STATUS } from '@ionic-native/media';
import { AlertController, Platform } from 'ionic-angular';

import { File, FileEntry } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

import { CallVoiceProvider } from './../call-voice/call-voice';
import { GifChangeProvider } from './../gif-change/gif-change';
import { SaveDataProvider } from './../save-data/save-data';

@Injectable()
export class CallTtsProvider {

  public saveAudio: SaveDataProvider;
  public checkpointVoice = false;
  public checkpointSynthetisize = false;
  public duration;
  public cont = 0;


  constructor(public file: File,
              public txfr: FileTransfer,
              public http: Http,
              private Data: SaveDataProvider,
              public media: Media,
              public gif: GifChangeProvider,
              public platform: Platform) { }

    synthesize(text: any) {

    this.gif.events.publish("gif", "synthesizingGif");
    
    let user: string = "d5eed180-41b0-4fd2-9939-a2b1caf1d630";
    let password: string = "ZDCsgYo4Goen";
    //text = text.replace(/ /g, "%20");
    text = encodeURI(text);
    //console.log(text);
    let url: string = "stream.watsonplatform.net/text-to-speech/api/v1/synthesize?&accept=audio%2Fmp3&voice=en-US_LisaVoice&text";

    var path = `https://${user}:${password}@${url}=${text}`;
    
    let ft: FileTransferObject = this.txfr.create();
    console.log('CAMINHO novo: >>>>' + path);
    let fd = this.file.dataDirectory;
    if (this.platform.is('ios')) {
      fd = this.file.tempDirectory;
    }
    let fn = 'audio' + new Date().getTime() + '.mp3';
    console.log('teste >>  '+ fd + fn);
    ft.download(path, fd + fn).then(
      (fe: FileEntry) => {
        console.log(fe.nativeURL.replace(/^file:\/\//, ''));
        console.log('Length:'+fe.file.length);
        let song: MediaObject = this.media.create(fe.nativeURL.replace(/^file:\/\//, ''));
        
        song.onStatusUpdate.subscribe(MEDIA_STATUS => {if(MEDIA_STATUS == 4){this.gif.events.publish("gif", "waitingGif");
      }}); // fires when file status changes

        song.onSuccess.subscribe(() => console.log('Action is successful'));
        
        song.onError.subscribe(error => console.log('Error!', error));
        
        let p1 = new Promise(() => {
          this.gif.events.publish("gif", "speakGif");
          song.release();
          song.play({ playAudioWhenScreenIsLocked : false });
        });

        //if (this.platform.is('ios')) {
          //fe.remove;
        //}//
        this.file.removeFile(fd, fn);

      },
      err => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
