import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {
  private logCode: string = '';
  private verifyingCode: string = '132';
  @Output() passVerification = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  private enterNumber(number: number): void {
    console.log(number);
    this.logCode += number;
    if(this.logCode.length === 3) {
      this.checkLogCode();
    }
  }

  checkLogCode() {
    if(this.logCode === this.verifyingCode) {
      this.passVerification.emit(true);
      
    } else console.log("not equal");
    this.logCode = "";
  }
}
