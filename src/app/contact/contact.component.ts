import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,  // This makes the component standalone
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private contactService: ContactService) {}

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = {
      from_name: (form.querySelector('[placeholder="Full Name"]') as HTMLInputElement).value,
      reply_to: (form.querySelector('[placeholder="Email Address"]') as HTMLInputElement).value,
      phone: (form.querySelector('[placeholder="Mobile Number"]') as HTMLInputElement).value,
      subject: (form.querySelector('[placeholder="Subject"]') as HTMLInputElement).value,
      message: (form.querySelector('textarea') as HTMLTextAreaElement).value
    };

    try {
      await this.contactService.sendEmail(formData);
      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  }
}
