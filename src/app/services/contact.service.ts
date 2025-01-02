import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID';
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  constructor(private snackBar: MatSnackBar) {}

  async sendEmail(formData: any) {
    try {
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        formData,
        this.PUBLIC_KEY
      );
      this.showNotification('Message sent successfully!', 'success');
      return response;
    } catch (error) {
      this.showNotification('Failed to send message. Please try again.', 'error');
      throw error;
    }
  }

  private showNotification(message: string, type: 'success' | 'error') {
    this.snackBar.openFromComponent(AlertComponent, {
      data: { message },
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar']
    });
  }
}