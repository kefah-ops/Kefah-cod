// app/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section class="about-section animate-fade">
      <div class="hero-header">
        <div class="profile-intro">
          <h1>👋 Hi, I'm <span class="name-highlight">Kefah Ndirangu Wangui</span></h1>
          <div class="role-badges">
            <span class="badge developer">💻 Software Developer</span>
            <span class="badge assistant">🤝 Virtual Assistant</span>
            <span class="badge location">📍 Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      <div class="about-content">
        <div class="intro-card">
          <h2>🎓 Professional Background</h2>
          <p>
            With a <strong>Diploma in ICT</strong>, I blend technical expertise and administrative excellence 
            to deliver innovative and reliable solutions that drive business growth and efficiency.
          </p>
        </div>

        <div class="skills-grid">
          <div class="skill-card frontend">
            <div class="card-header">
              <h3>🎨 Frontend Development</h3>
            </div>
            <div class="card-content">
              <p>
                Building modern, user-centric applications with cutting-edge technologies:
              </p>
              <div class="tech-stack">
                <span class="tech-tag">⚡ TypeScript</span>
                <span class="tech-tag">🅰️ Angular</span>
                <span class="tech-tag">📱 JavaScript</span>
                <span class="tech-tag">🎯 Responsive Design</span>
              </div>
              <p>
                I specialize in creating dynamic dashboards, AI-driven applications, and 
                complex CRUD systems that transform ideas into functional, high-performance solutions.
              </p>
            </div>
          </div>

          <div class="skill-card backend">
            <div class="card-header">
              <h3>⚙️ Backend Development</h3>
            </div>
            <div class="card-content">
              <p>
                Crafting robust, scalable server-side solutions:
              </p>
              <div class="tech-stack">
                <span class="tech-tag">🟢 Node.js</span>
                <span class="tech-tag">🚀 Express.js</span>
                <span class="tech-tag">🗄️ Database Design</span>
                <span class="tech-tag">🔗 RESTful APIs</span>
              </div>
              <p>
                Expert in building secure APIs and services that power modern applications 
                with optimal performance and reliability.
              </p>
            </div>
          </div>

          <div class="skill-card devops">
            <div class="card-header">
              <h3>☁️ DevOps & Cloud</h3>
            </div>
            <div class="card-content">
              <p>
                Streamlining deployment and infrastructure management:
              </p>
              <div class="tech-stack">
                <span class="tech-tag">🐳 Docker</span>
                <span class="tech-tag">☁️ AWS</span>
                <span class="tech-tag">🔄 CI/CD Pipelines</span>
                <span class="tech-tag">📊 Monitoring</span>
              </div>
              <p>
                Passionate about implementing containerization and cloud deployments 
                for secure, efficient, and scalable application delivery.
              </p>
            </div>
          </div>

          <div class="skill-card virtual-assistant">
            <div class="card-header">
              <h3>🤝 Virtual Assistant Excellence</h3>
            </div>
            <div class="card-content">
              <p>
                Supporting teams with precision and efficiency:
              </p>
              <div class="tech-stack">
                <span class="tech-tag">⏰ Time Management</span>
                <span class="tech-tag">💬 Communication</span>
                <span class="tech-tag">📊 Google Workspace</span>
                <span class="tech-tag">📋 Microsoft Office</span>
              </div>
              <p>
                Bringing strong organizational skills and digital tool proficiency 
                to support creative and technical teams effectively.
              </p>
            </div>
          </div>
        </div>

        <div class="value-proposition">
          <h2>🌟 What Makes Me Different</h2>
          <div class="value-grid">
            <div class="value-item">
              <div class="value-icon">🔗</div>
              <h4>Bridge Technology & Operations</h4>
              <p>Unique combination of software development and virtual assistant skills</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🎯</div>
              <h4>End-to-End Solutions</h4>
              <p>From concept to deployment, including workflow automation and team support</p>
            </div>
            <div class="value-item">
              <div class="value-icon">📈</div>
              <h4>Business Growth Focus</h4>
              <p>Delivering solutions that empower businesses and drive measurable results</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🔧</div>
              <h4>Problem-Solving Mindset</h4>
              <p>Adaptable approach with dedication to overcoming technical challenges</p>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h2>🚀 Ready to Collaborate?</h2>
          <p>
            Whether you need containerized apps on AWS, automated DevOps workflows, 
            or reliable virtual assistant support, I bring the perfect blend of 
            technical expertise and operational excellence to your projects.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 40px 20px;
      color: #fff;
      max-width: 1200px;
      margin: auto;
      line-height: 1.6;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .hero-header {
      text-align: center;
      margin-bottom: 50px;
      padding: 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .hero-header h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .name-highlight {
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .role-badges {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .badge {
      padding: 10px 20px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 0.9rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .badge:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .badge.developer {
      background: linear-gradient(135deg, #00bcd4, #00acc1);
      color: white;
    }

    .badge.assistant {
      background: linear-gradient(135deg, #4caf50, #43a047);
      color: white;
    }

    .badge.location {
      background: linear-gradient(135deg, #ff9800, #f57c00);
      color: white;
    }

    .about-content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .intro-card {
      background: linear-gradient(135deg, #2d3748, #4a5568);
      padding: 30px;
      border-radius: 15px;
      border-left: 5px solid #00bcd4;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .intro-card h2 {
      color: #00bcd4;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .skill-card {
      background: linear-gradient(135deg, #2d3748, #4a5568);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .skill-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    }

    .card-header {
      padding: 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }

    .card-header h3 {
      margin: 0;
      font-size: 1.3rem;
      color: white;
    }

    .card-content {
      padding: 25px;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 15px 0;
    }

    .tech-tag {
      background: linear-gradient(135deg, #00bcd4, #0097a7);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: bold;
      box-shadow: 0 3px 10px rgba(0, 188, 212, 0.3);
    }

    .value-proposition {
      background: linear-gradient(135deg, #1a202c, #2d3748);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    .value-proposition h2 {
      text-align: center;
      color: #ffd54f;
      margin-bottom: 30px;
      font-size: 2rem;
    }

    .value-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    .value-item {
      text-align: center;
      padding: 25px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: background 0.3s ease;
    }

    .value-item:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .value-item h4 {
      color: #00bcd4;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .cta-section {
      text-align: center;
      padding: 40px;
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      border-radius: 15px;
      box-shadow: 0 15px 35px rgba(255, 107, 107, 0.3);
    }

    .cta-section h2 {
      color: white;
      margin-bottom: 20px;
      font-size: 2rem;
    }

    .cta-section p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.9);
      max-width: 700px;
      margin: 0 auto;
    }

    strong {
      color: #ffd54f;
      font-weight: bold;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .about-section {
        padding: 20px 15px;
      }

      .hero-header h1 {
        font-size: 2rem;
      }

      .role-badges {
        flex-direction: column;
        align-items: center;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .value-grid {
        grid-template-columns: 1fr;
      }
    }

    @keyframes fade {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade {
      animation: fade 1s ease-out;
    }
  `]
})
export class AboutComponent {}