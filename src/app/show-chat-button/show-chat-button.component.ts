import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'show-chat-button',
  templateUrl: './show-chat-button.component.html',
  styleUrls: ['./show-chat-button.component.css']
})
export class ShowChatButtonComponent {
  @Output() isVisibleChatWindow = new EventEmitter<boolean>();
  constructor() { }

  showChatWindow() {
    this.isVisibleChatWindow.emit(true);
  }
}
