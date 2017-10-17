import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SpyBackgroundComponent } from './spy-background/spy-background.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SpyBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
