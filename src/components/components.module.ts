import { NgModule } from '@angular/core';
import { VoiceChatComponent } from './voice-chat/voice-chat';
import { TextChatComponent } from './text-chat/text-chat';
import { BodyTextChatComponent } from './body-text-chat/body-text-chat';
@NgModule({
	declarations: [VoiceChatComponent,
    TextChatComponent,
    BodyTextChatComponent],
	imports: [],
	exports: [VoiceChatComponent,
    TextChatComponent,
    BodyTextChatComponent]
})
export class ComponentsModule {}
