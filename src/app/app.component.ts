import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  template: `
    <div class="app-container">
      <header class="header">
        <div class="header-content">
          <div class="profile-section">
            <div class="profile-image-container">
              <img 
                src="assets/kefah.jpg" 
                alt="Kefah Ndirangu" 
                class="profile-image"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="profile-avatar" style="display:none;">
                <span class="avatar-initials">KN</span>
              </div>
            </div>
          </div>
          <h1>Kefah Ndirangu Wangui Portfolio</h1>
        </div>
      </header>
      <nav class="taskbar">
        <div class="taskbar-buttons">
          <button routerLink="/" aria-label="Home">
            <i class="fas fa-home"></i> Home
          </button>
          <button routerLink="/about" aria-label="About">
            <i class="fas fa-user"></i> About
          </button>
          <button routerLink="/resume" aria-label="Resume">
            <i class="fas fa-file-alt"></i> Resume
          </button>

          <button routerLink="/contact" aria-label="Contact">
            <i class="fas fa-envelope"></i> Contact
          </button>
           <button routerLink="/projects-gallery" aria-label="Projects Completed">
            <i class="fas fa-images"></i> Projects Completed
          </button>
        </div>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a3f, #3a3a88);
      color: #fff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
      text-align: center;
      border-bottom: 2px solid #6a1b9a;
      padding: 10px 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .profile-section {
      display: flex;
      align-items: center;
    }

    .profile-image-container {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #9575cd;
      box-shadow: 0 0 15px rgba(149, 117, 205, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .profile-image-container:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(149, 117, 205, 0.8);
    }

    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .profile-avatar {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #9575cd, #7e57c2);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .avatar-initials {
      font-size: 16px;
      font-weight: bold;
      color: white;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-family: 'Orbitron', sans-serif;
      color: #9575cd;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
      letter-spacing: 2px;
      transition: transform 0.4s ease, color 0.4s ease;
    }

    .header h1:hover {
      transform: scale(1.05);
      color: #b388ff;
    }

    .taskbar {
      position: fixed;
      top: 20%;
      left: 0;
      background: rgba(40, 40, 80, 0.6);
      backdrop-filter: blur(15px);
      border-radius: 0 12px 12px 0;
      padding: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      transform: translateX(-100%);
      transition: transform 0.4s ease-in-out, opacity 0.3s ease;
      opacity: 0.6;
    }

    .app-container:hover .taskbar {
      transform: translateX(0);
      opacity: 1;
    }

    .taskbar-buttons {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .taskbar button {
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid transparent;
      border-image: linear-gradient(45deg, #7e57c2, #5c6bc0) 1;
      color: #b388ff;
      font-size: 16px;
      cursor: pointer;
      padding: 10px 16px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
      backdrop-filter: blur(5px);
    }

    .taskbar button:hover {
      background: linear-gradient(135deg, #7e57c2, #5c6bc0);
      color: #fff;
      transform: translateX(5px) scale(1.05);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    }

    .taskbar i {
      font-size: 18px;
    }

    .content {
      width: 90%;
      max-width: 900px;
      margin: 20px auto;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .content:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 600px) {
      .header-content {
        flex-direction: column;
        gap: 10px;
      }

      .profile-image-container {
        width: 40px;
        height: 40px;
      }

      .header h1 {
        font-size: 22px;
      }

      .taskbar button {
        font-size: 14px;
        padding: 8px 12px;
      }

      .avatar-initials {
        font-size: 14px;
      }
    }
  `]
})
export class AppComponent {}