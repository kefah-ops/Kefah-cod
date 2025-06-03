import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <!-- Header Section -->
      <div class="section-header">
        <h1 class="main-title">🚀 Featured Projects</h1>
        <p class="section-subtitle">
          Explore my latest work showcasing full-stack development, AI integration, 
          and innovative solutions across various technologies.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        
        <!-- Admin Dashboard Project -->
        <div class="project-card featured" [class.flipped]="flippedCards['dashboard']" 
             (click)="toggleCard('dashboard')">
          <div class="card-inner">
            <div class="card-front">
              <div class="project-image">
                <img 
                  [src]="'assets/images/admin-dashboard.jpg'" 
                  alt="Admin Dashboard Screenshot"
                  class="project-img"
                  (error)="onImageError($event, 'dashboard')"
                />
                <div class="image-overlay dashboard-bg" [class.show-overlay]="!imageLoaded['dashboard']">
                  <div class="tech-stack-overlay">
                    <span class="tech-tag">Angular</span>
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">TypeScript</span>
                  </div>
                  <div class="project-icon">📊</div>
                </div>
                <div class="tech-stack-overlay" *ngIf="imageLoaded['dashboard']">
                  <span class="tech-tag">Angular</span>
                  <span class="tech-tag">PostgreSQL</span>
                  <span class="tech-tag">TypeScript</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">Admin Dashboard</h3>
                <p class="project-brief">Modern administrative interface with real-time analytics</p>
                <div class="project-status">
                  <span class="status-badge completed">✅ Completed</span>
                </div>
              </div>
              <div class="card-footer">
                <span class="flip-hint">Click to see details →</span>
              </div>
            </div>
            <div class="card-back">
              <div class="project-details">
                <h3>📊 Admin Dashboard</h3>
                <div class="detail-section">
                  <h4>🎯 Key Features:</h4>
                  <ul>
                    <li>Real-time data visualization with interactive charts</li>
                    <li>User management with role-based permissions</li>
                    <li>Advanced filtering and search capabilities</li>
                    <li>Responsive design for all devices</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h4>🛠️ Technologies:</h4>
                  <div class="tech-details">
                    <span class="tech-item">Angular 17+</span>
                    <span class="tech-item">PostgreSQL</span>
                    <span class="tech-item">Node.js</span>
                    <span class="tech-item">Chart.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Resume Builder Project -->
        <div class="project-card" [class.flipped]="flippedCards['resume']" 
             (click)="toggleCard('resume')">
          <div class="card-inner">
            <div class="card-front">
              <div class="project-image">
                <img 
                  [src]="'assets/images/ai-resume-builder.jpg'" 
                  alt="AI Resume Builder Screenshot"
                  class="project-img"
                  (error)="onImageError($event, 'resume')"
                />
                <div class="image-overlay resume-bg" [class.show-overlay]="!imageLoaded['resume']">
                  <div class="tech-stack-overlay">
                    <span class="tech-tag">Angular</span>
                    <span class="tech-tag">AI</span>
                    <span class="tech-tag">OpenAI</span>
                  </div>
                  <div class="project-icon">📄</div>
                </div>
                <div class="tech-stack-overlay" *ngIf="imageLoaded['resume']">
                  <span class="tech-tag">Angular</span>
                  <span class="tech-tag">AI</span>
                  <span class="tech-tag">OpenAI</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">AI Resume Builder</h3>
                <p class="project-brief">Intelligent resume generation with AI assistance</p>
                <div class="project-status">
                  <span class="status-badge completed">✅ Completed</span>
                </div>
              </div>
              <div class="card-footer">
                <span class="flip-hint">Click to see details →</span>
              </div>
            </div>
            <div class="card-back">
              <div class="project-details">
                <h3>📄 AI Resume Builder</h3>
                <div class="detail-section">
                  <h4>🎯 Key Features:</h4>
                  <ul>
                    <li>AI-powered content suggestions and optimization</li>
                    <li>Multiple professional resume templates</li>
                    <li>Real-time preview and editing</li>
                    <li>PDF export with custom formatting</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h4>🛠️ Technologies:</h4>
                  <div class="tech-details">
                    <span class="tech-item">Angular</span>
                    <span class="tech-item">OpenAI API</span>
                    <span class="tech-item">PDF.js</span>
                    <span class="tech-item">RxJS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- MetaTrader 5 Bot Project -->
        <div class="project-card" [class.flipped]="flippedCards['forex']" 
             (click)="toggleCard('forex')">
          <div class="card-inner">
            <div class="card-front">
              <div class="project-image">
                <img 
                  [src]="'../assets/tradingbot.png'" 
                  alt="MetaTrader 5 Forex Bot Screenshot"
                  class="project-img"
                  (error)="onImageError($event, 'forex')"
                />
                <div class="image-overlay forex-bg" [class.show-overlay]="!imageLoaded['forex']">
                  <div class="tech-stack-overlay">
                    <span class="tech-tag">MQL5</span>
                    <span class="tech-tag">Trading</span>
                    <span class="tech-tag">Algorithm</span>
                  </div>
                  <div class="project-icon">🤖</div>
                </div>
                <div class="tech-stack-overlay" *ngIf="imageLoaded['forex']">
                  <span class="tech-tag">MQL5</span>
                  <span class="tech-tag">Trading</span>
                  <span class="tech-tag">Algorithm</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">MetaTrader 5 Forex Bot</h3>
                <p class="project-brief">Automated trading system with advanced algorithms</p>
                <div class="project-status">
                  <span class="status-badge completed">✅ Completed</span>
                </div>
              </div>
              <div class="card-footer">
                <span class="flip-hint">Click to see details →</span>
              </div>
            </div>
            <div class="card-back">
              <div class="project-details">
                <h3>🤖 MetaTrader 5 Forex Bot</h3>
                <div class="detail-section">
                  <h4>🎯 Key Features:</h4>
                  <ul>
                    <li>Advanced technical indicator analysis</li>
                    <li>Risk management with stop-loss automation</li>
                    <li>Multi-timeframe strategy implementation</li>
                    <li>Real-time market data processing</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h4>🛠️ Technologies:</h4>
                  <div class="tech-details">
                    <span class="tech-item">MQL5</span>
                    <span class="tech-item">MetaTrader 5</span>
                    <span class="tech-item">Trading APIs</span>
                    <span class="tech-item">Algorithm Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Job Portal Project -->
        <div class="project-card featured" [class.flipped]="flippedCards['jobportal']" 
             (click)="toggleCard('jobportal')">
          <div class="card-inner">
            <div class="card-front">
              <div class="project-image">
                <img 
                  [src]="'src/assets/skill-match.png'" 
                  alt="Job Portal Platform Screenshot"
                  class="project-img"
                  (error)="onImageError($event, 'jobportal')"
                />
                <div class="image-overlay jobportal-bg" [class.show-overlay]="!imageLoaded['jobportal']">
                  <div class="tech-stack-overlay">
                    <span class="tech-tag">Angular</span>
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">JWT Auth</span>
                  </div>
                  <div class="project-icon">🧑‍💼</div>
                </div>
                <div class="tech-stack-overlay" *ngIf="imageLoaded['jobportal']">
                  <span class="tech-tag">Angular</span>
                  <span class="tech-tag">Node.js</span>
                  <span class="tech-tag">JWT Auth</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">Job Portal Platform</h3>
                <p class="project-brief">Complete recruitment solution with role-based access</p>
                <div class="project-status">
                  <span class="status-badge completed">✅ Completed</span>
                </div>
              </div>
              <div class="card-footer">
                <span class="flip-hint">Click to see details →</span>
              </div>
            </div>
            <div class="card-back">
              <div class="project-details">
                <h3>🧑‍💼 Job Portal Platform</h3>
                <div class="detail-section">
                  <h4>🎯 Key Features:</h4>
                  <ul>
                    <li>Role-based authentication (Admin, Recruiter, Seeker)</li>
                    <li>Advanced job search and filtering system</li>
                    <li>Application tracking and management</li>
                    <li>Real-time notifications and messaging</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h4>🛠️ Technologies:</h4>
                  <div class="tech-details">
                    <span class="tech-item">Angular</span>
                    <span class="tech-item">Express.js</span>
                    <span class="tech-item">JWT Auth</span>
                    <span class="tech-item">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h2>🔍 Want to See More?</h2>
        <p>
          These projects represent just a glimpse of my capabilities. Each project demonstrates 
          my commitment to clean code, user experience, and innovative solutions.
        </p>
        <div class="cta-buttons">
          <button class="cta-btn primary">📧 Contact Me</button>
          <button class="cta-btn secondary">💼 View Full Portfolio</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

    .projects-section {
      font-family: 'Inter', sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 25px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
      color: #fff;
      position: relative;
      overflow: hidden;
    }

    .projects-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
      pointer-events: none;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
      position: relative;
      z-index: 1;
    }

    .main-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      background: linear-gradient(45deg, #ffd700, #ffed4e, #ffd700);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
      position: relative;
      z-index: 1;
    }

    .project-card {
      height: 400px;
      perspective: 1000px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-10px);
    }

    .project-card.featured {
      border: 2px solid #ffd700;
      border-radius: 20px;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .project-card.flipped .card-inner {
      transform: rotateY(180deg);
    }

    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 20px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }

    .card-back {
      transform: rotateY(180deg);
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .project-image {
      height: 200px;
      position: relative;
      overflow: hidden;
    }

    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .project-card:hover .project-img {
      transform: scale(1.05);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .image-overlay.show-overlay {
      opacity: 1;
    }

    .dashboard-bg {
      background: linear-gradient(135deg, #667eea, #764ba2);
    }

    .resume-bg {
      background: linear-gradient(135deg, #f093fb, #f5576c);
    }

    .forex-bg {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
    }

    .jobportal-bg {
      background: linear-gradient(135deg, #43e97b, #38f9d7);
    }

    .project-icon {
      font-size: 4rem;
      opacity: 0.9;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .tech-stack-overlay {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      z-index: 2;
    }

    .tech-tag {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 600;
      backdrop-filter: blur(10px);
    }

    .project-info {
      padding: 25px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .project-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #ffd54f;
    }

    .project-brief {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin-bottom: 15px;
    }

    .project-status {
      margin-top: auto;
    }

    .status-badge {
      background: rgba(76, 175, 80, 0.2);
      color: #4caf50;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid rgba(76, 175, 80, 0.3);
    }

    .card-footer {
      padding: 15px 25px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .flip-hint {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      font-style: italic;
    }

    .project-details h3 {
      color: #ffd54f;
      margin-bottom: 20px;
      font-size: 1.3rem;
    }

    .detail-section {
      margin-bottom: 20px;
    }

    .detail-section h4 {
      color: #00bcd4;
      margin-bottom: 10px;
      font-size: 1rem;
    }

    .detail-section ul {
      list-style: none;
      padding: 0;
      text-align: left;
    }

    .detail-section li {
      padding: 5px 0;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
      position: relative;
      padding-left: 20px;
    }

    .detail-section li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #4caf50;
      font-weight: bold;
    }

    .tech-details {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-item {
      background: rgba(0, 188, 212, 0.2);
      color: #00bcd4;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(0, 188, 212, 0.3);
    }

    .cta-section {
      text-align: center;
      padding: 40px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      z-index: 1;
    }

    .cta-section h2 {
      color: #ffd54f;
      margin-bottom: 15px;
      font-size: 2rem;
    }

    .cta-section p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 30px;
      font-size: 1.1rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-btn {
      padding: 15px 30px;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .cta-btn.primary {
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
      box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
    }

    .cta-btn.primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
    }

    .cta-btn.secondary {
      background: transparent;
      color: #00bcd4;
      border: 2px solid #00bcd4;
    }

    .cta-btn.secondary:hover {
      background: #00bcd4;
      color: white;
      transform: translateY(-3px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .projects-section {
        padding: 40px 20px;
      }

      .main-title {
        font-size: 2.5rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .project-card {
        height: 350px;
      }

      .cta-section {
        padding: 30px 20px;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .cta-btn {
        width: 200px;
      }
    }
  `]
})
export class ProjectsComponent {
  flippedCards: { [key: string]: boolean } = {};
  imageLoaded: { [key: string]: boolean } = {
    dashboard: false,
    resume: false,
    forex: false,
    jobportal: false
  };

  toggleCard(projectId: string) {
    this.flippedCards[projectId] = !this.flippedCards[projectId];
  }

  onImageError(event: any, projectId: string) {
    // Hide the broken image and show the fallback overlay
    event.target.style.display = 'none';
    this.imageLoaded[projectId] = false;
  }
}