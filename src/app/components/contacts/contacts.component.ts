import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule],
  template: `
    <div class="contact-section">
      <div class="background-animation"></div>
      <div class="content">
        <h2 class="title">
          <span class="title-text">Contact</span>
          <div class="title-underline"></div>
        </h2>
        
        <div class="contact-grid">
          <div class="contact-item email">
            <div class="icon-wrapper">
              <span class="icon">📧</span>
            </div>
            <div class="contact-info">
              <span class="label">Email</span>
              <a href="mailto:ndirangukefah@gmail.com" class="value">
               ndirangukefah.&#64;gmail.com
              </a>
            </div>
          </div>

          <div class="contact-item phone">
            <div class="icon-wrapper">
              <span class="icon">📞</span>
            </div>
            <div class="contact-info">
              <span class="label">Phone</span>
              <a href="tel:+254746258256" class="value">
                0746 258 256
              </a>
            </div>
          </div>

          <div class="contact-item location">
            <div class="icon-wrapper">
              <span class="icon">📍</span>
            </div>
            <div class="contact-info">
              <span class="label">Location</span>
              <span class="value">Nyeri, Kenya</span>
            </div>
          </div>
        </div>

        <div class="pulse-circle"></div>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    .contact-section {
      font-family: 'Poppins', sans-serif;
      position: relative;
      background: linear-gradient(135deg, #ff006e, #fb5607, #ffbe0b, #8338ec, #3a86ff);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
      color: #fff;
      max-width: 800px;
      margin: 40px auto;
      padding: 60px 40px;
      border-radius: 30px;
      box-shadow: 
        0 20px 60px rgba(255, 0, 110, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1);
      text-align: center;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .contact-section:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 
        0 30px 80px rgba(255, 0, 110, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    }

    .background-animation {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
      animation: float 6s ease-in-out infinite;
    }

    .content {
      position: relative;
      z-index: 2;
    }

    .title {
      position: relative;
      margin-bottom: 50px;
    }

    .title-text {
      font-weight: 700;
      font-size: 3.5rem;
      background: linear-gradient(45deg, #fff, #ffbe0b, #ff006e);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textGlow 3s ease-in-out infinite alternate;
      text-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
    }

    .title-underline {
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #ff006e, #ffbe0b);
      margin: 15px auto;
      border-radius: 2px;
      animation: underlineGrow 2s ease-in-out infinite alternate;
    }

    .contact-grid {
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: center;
    }

    .contact-item {
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 25px 35px;
      border-radius: 20px;
      min-width: 400px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }

    .contact-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .contact-item:hover::before {
      left: 100%;
    }

    .contact-item:hover {
      transform: translateX(10px) scale(1.05);
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    .icon-wrapper {
      margin-right: 20px;
      padding: 15px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
      border-radius: 50%;
      animation: iconBounce 2s ease-in-out infinite;
    }

    .email .icon-wrapper {
      animation-delay: 0s;
    }

    .phone .icon-wrapper {
      animation-delay: 0.3s;
    }

    .location .icon-wrapper {
      animation-delay: 0.6s;
    }

    .icon {
      font-size: 1.8rem;
      display: block;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      text-align: left;
      flex: 1;
    }

    .label {
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.8;
      margin-bottom: 5px;
    }

    .value {
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    a.value:hover {
      color: #ffbe0b;
      text-shadow: 0 0 10px rgba(255, 190, 11, 0.5);
      transform: translateY(-2px);
    }

    .pulse-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      animation: pulse 4s ease-in-out infinite;
      z-index: 1;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    @keyframes textGlow {
      0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
      100% { text-shadow: 0 0 30px rgba(255, 190, 11, 0.8), 0 0 40px rgba(255, 0, 110, 0.6); }
    }

    @keyframes underlineGrow {
      0% { width: 100px; }
      100% { width: 150px; }
    }

    @keyframes iconBounce {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes pulse {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.1;
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0.3;
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .contact-section {
        margin: 20px;
        padding: 40px 20px;
      }

      .title-text {
        font-size: 2.5rem;
      }

      .contact-item {
        min-width: auto;
        width: 100%;
        flex-direction: column;
        text-align: center;
        padding: 20px;
      }

      .icon-wrapper {
        margin-right: 0;
        margin-bottom: 15px;
      }

      .contact-info {
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .title-text {
        font-size: 2rem;
      }

      .contact-item {
        padding: 15px;
      }

      .icon {
        font-size: 1.5rem;
      }

      .value {
        font-size: 1rem;
      }
    }
  `]
})
export class ContactComponent {}