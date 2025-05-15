import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  imports: [],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.css'
})
export class AlertComponentComponent {
  showAlert = false;
  alertMessage = '';

  showMyAlert(msg: string) {
    this.alertMessage = msg;
    this.showAlert = true;
  }
}
