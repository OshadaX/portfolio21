import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  template: `
    <span class="alert-message">
      {{ data.message }}
    </span>
  `,
  styles: [
    `.alert-message { 
      color: white;
      text-align: center;
    }`
  ]
})
export class AlertComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {message: string}) {}
}