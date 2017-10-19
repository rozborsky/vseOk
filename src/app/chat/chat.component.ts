import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },

})
export class ChatComponent implements OnInit {
  private isVisible: boolean = true;
  private openWindow: boolean = false;

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target) && !this.openWindow) {
      this.isVisible = false;
    } else {
      this.openWindow = false;
    }
  }

  private showChat() {
    this.openWindow = true;
    this.isVisible = true;
  }
}
