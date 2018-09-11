import { Component } from '@angular/core';

import { ContextChatProvider } from './../../providers/context-chat/context-chat';

@Component({
  selector: 'body-text-chat',
  templateUrl: 'body-text-chat.html'
})
export class BodyTextChatComponent {

  mensagens = [];

  constructor(private contextChatProvider: ContextChatProvider) { }

  ngOnInit() {
    this.contextChatProvider.arrayMensagensEmitter
      .subscribe(res => this.setArrayMsg(res));
  }

  changeWords(text: String): String {
    text = text.replace(/Bi/g, "Bee");
    text = text.replace(/Triléb/g, "Tree Lab");
    text = text.replace(/Uótson/g, "Watson");
    text = text.replace(/Fhínkin/g, "Thinking");
    text = text.replace(/Startap/g, "Startup");
    text = text.replace(/startaps/g, "startups");
    text = text.replace(/internéchonal bíznis maxiní/g, "International Business Machine");
    return text;
  }

  setArrayMsg(msgArray): void {
    for (let i = 0; i < msgArray.length; i++) {
      msgArray[i].texto = this.changeWords(msgArray[i].texto);
    }
    this.mensagens = msgArray;
    (async () => {
      const delay = time => new Promise(res => setTimeout(() => res(), time));
      await delay(10);
      this.updateScroll();
    })();
  }

  updateScroll(): void {
    var element = document.getElementById("bodyChat");
    element.scrollTop = element.scrollHeight;
  }

}
