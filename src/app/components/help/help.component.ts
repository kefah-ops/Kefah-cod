import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  faqs = [
    {
      question: 'How do I upload an image for diagnosis?',
      answer: 'Go to the Diagnose page, click "Choose File", select a crop image, and click Diagnose.',
      open: false
    },
    {
      question: 'Can I use AgroAI offline?',
      answer: 'Not yet! You need an internet connection to access AI-based diagnosis and chat features.',
      open: false
    },
    {
      question: 'How accurate is AgroAI?',
      answer: 'Our AI achieves 90–95% accuracy based on trained datasets, but we recommend confirming results with an agronomist.',
      open: false
    },
    {
      question: 'How do I contact support?',
      answer: 'Use the contact form below to send us a message. We’ll reply as soon as possible!',
      open: false
    }
  ];

  user = {
    name: '',
    email: '',
    message: ''
  };

  toggleFAQ(faq: any): void {
    faq.open = !faq.open;
  }

  sendMessage(): void {
    if (!this.user.name || !this.user.email || !this.user.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    alert('✅ Thank you! Your message has been sent successfully.');
    this.user = { name: '', email: '', message: '' };
  }
}
