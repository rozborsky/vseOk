import { Component, Output, EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class ChatWindowComponent {
  @Output() isVisibleChatWindow = new EventEmitter<boolean>();
  private passVerification: boolean = false;
  private canShowMessages: boolean = false;

  constructor(private _eref: ElementRef) { }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target) && ! this.passVerification) {
      this.closeChatWindow();
    } 
    this.passVerification = false;
  }  

  private closeChatWindow():void {
    this.passVerification = false;
    this.isVisibleChatWindow.emit(false);
    this.canShowMessages = false;
    console.log("close")
  }

  private showMessages(isLogged: boolean) {
    this.passVerification = isLogged;
    this.canShowMessages = true;
    console.log("show");
  }
}
