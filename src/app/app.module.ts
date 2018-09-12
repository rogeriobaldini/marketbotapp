import { GifChangeProvider } from './../providers/gif-change/gif-change';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Device } from '@ionic-native/device';

import { Autosize } from '../directives/autosize/autosize';
import { BodyTextChatComponent } from './../components/body-text-chat/body-text-chat';
import { ConfigPage } from './../pages/config/config';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { TextChatComponent } from './../components/text-chat/text-chat';
import { CallChatProvider } from '../providers/call-chat/call-chat';
import { VoiceChatComponent } from '../components/voice-chat/voice-chat';
import { CallVoiceProvider } from '../providers/call-voice/call-voice';
import { ContextChatProvider } from '../providers/context-chat/context-chat';
import { SaveDataProvider } from '../providers/save-data/save-data';
import { CallTtsProvider } from '../providers/call-tts/call-tts';
import { Media, MediaObject } from '@ionic-native/media';
import { File, FileEntry } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    Autosize,
    BodyTextChatComponent,
    ConfigPage,
    HomePage,
    MyApp,
    TextChatComponent,
    VoiceChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConfigPage,
    HomePage,
    MyApp
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BodyTextChatComponent,
    CallChatProvider,
    CallTtsProvider,
    CallVoiceProvider,
    ContextChatProvider,
    VoiceChatComponent,
    Device,
    Media,
    File,
    FileTransfer,
    SpeechRecognition,
    SaveDataProvider,
    AlertController,
    GifChangeProvider,
    Network,
    TextToSpeech
   ]
})
export class AppModule {}