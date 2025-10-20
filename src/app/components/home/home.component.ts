import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../services/ai.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInput = '';
  messages: { sender: 'user' | 'ai'; text: string }[] = [];
  isLoading = false;
  selectedImage: File | null = null;
  diagnosisResult: string | null = null;
  token: string | null = null;

  constructor(private aiService: AiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (!this.token) {
      this.messages.push({ sender: 'ai', text: '⚠️ Please log in to chat with AgroAI.' });
    } else {
      this.messages.push({ sender: 'ai', text: '🌱 Hello! I’m AgroAI. How can I help your crops today?' });
    }
  }

  sendMessage(): void {
    if (!this.userInput.trim() || !this.token) return;

    const message = { sender: 'user' as const, text: this.userInput };
    this.messages.push(message);
    const query = this.userInput;
    this.userInput = '';
    this.isLoading = true;

    this.aiService.sendMessage(query, this.token).subscribe({
      next: (response) => {
        this.messages.push({
          sender: 'ai',
          text: response.response || "🤖 Sorry, I couldn't understand that."
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('AI Error:', err);
        this.messages.push({
          sender: 'ai',
          text: '❌ Sorry, there was a problem reaching AgroAI.'
        });
        this.isLoading = false;
      }
    });
  }

  // Handle image upload
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && this.token) {
      this.selectedImage = file;
      this.diagnosisResult = null;
      this.isLoading = true;

      this.aiService.diagnose(file, this.token).subscribe({
        next: (res) => {
          this.diagnosisResult = `🩺 Disease: ${res.disease}\n📈 Confidence: ${(res.confidence * 100).toFixed(1)}%\n💡 Recommendation: ${res.recommendation}`;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Diagnosis error:', err);
          this.diagnosisResult = '❌ Failed to analyze image.';
          this.isLoading = false;
        }
      });
    }
  }
}
