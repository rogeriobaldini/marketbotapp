import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class GifChangeProvider {

  constructor(public events: Events) {
  }

}
