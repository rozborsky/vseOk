import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private canSeeChat: boolean = true;

  private showWindow(): void {
this.canSeeChat = false;
  }
}
