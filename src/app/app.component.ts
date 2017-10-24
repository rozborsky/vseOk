import { Component } from '@angular/core';
import { ContentChild } from '@angular/core';
import { ExternalPageComponent } from './external-page/external-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isVisibleChatWindow: boolean = false;
  private isButtonClicked: boolean = false;

  private closeChatWindow(event) {
    if(!this.isButtonClicked) {
      this.isVisibleChatWindow = false;
    }
    this.isButtonClicked = false;
  }

  private showChatWindow(event) {
    console.log('show');
    this.isVisibleChatWindow = true;
    this.isButtonClicked = true;
  }
}
