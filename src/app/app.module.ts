import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpyBackgroundComponent } from './spy-background/spy-background.component';
import { ExternalPageComponent } from './external-page/external-page.component';
import { ShowChatButtonComponent } from './show-chat-button/show-chat-button.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SpyBackgroundComponent,
    ExternalPageComponent,
    ShowChatButtonComponent,
    ChatWindowComponent,
    MessagesComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
