import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team = [
    {
      name: 'Kefah Ndirangu',
      role: 'Founder & Developer',
      description: 'Passionate about AI, web development, and building tech that empowers African farmers.',
      image: 'assets/kefah-profile.png'
    },
    {
      name: 'AgroAI',
      role: 'AI Assistant',
      description: 'A friendly digital agronomist powered by machine learning and natural language processing.',
      image: 'assets/agroai-avatar.png'
    }
  ];
}
