// app/resume/resume.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [CommonModule],
  template: `
    <section class="resume-section animate-slide">
      <!-- Header Section -->
      <div class="resume-header">
        <h1 class="name-title">📄 Professional Resume</h1>
        <div class="contact-info">
          <span class="contact-item">💼 Kefah Ndirangu Wangui</span>
          <span class="contact-item">📍 Nairobi, Kenya</span>
          <span class="contact-item">💻 Software Developer & Virtual Assistant</span>
        </div>
      </div>

      <!-- Professional Summary -->
      <div class="resume-section-card">
        <div class="section-header">
          <h2><span class="section-icon">🎯</span>Professional Summary</h2>
        </div>
        <div class="section-content">
          <p class="summary-text">
            <strong>Tech-savvy and detail-oriented</strong> Virtual Assistant and Software Developer with extensive experience 
            in administrative support, full-stack web development, and DevOps practices. Proven track record of delivering 
            <strong>professional, efficient, and collaborative solutions</strong> to creative teams and complex software projects. 
            Expertise in modern web technologies including <strong>TypeScript, JavaScript, Angular, Express.js, Docker, and AWS</strong>, 
            combined with exceptional organizational and communication skills.
          </p>
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="resume-section-card">
        <div class="section-header">
          <h2><span class="section-icon">⚡</span>Technical Skills</h2>
        </div>
        <div class="section-content">
          <div class="skills-grid">
            <div class="skill-category">
              <h4 class="skill-category-title">🎨 Frontend Development</h4>
              <div class="skill-tags">
                <span class="skill-tag frontend">TypeScript</span>
                <span class="skill-tag frontend">JavaScript</span>
                <span class="skill-tag frontend">Angular</span>
                <span class="skill-tag frontend">HTML5/CSS3</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h4 class="skill-category-title">⚙️ Backend Development</h4>
              <div class="skill-tags">
                <span class="skill-tag backend">Node.js</span>
                <span class="skill-tag backend">Express.js</span>
                <span class="skill-tag backend">RESTful APIs</span>
                <span class="skill-tag backend">PostgreSQL</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h4 class="skill-category-title">☁️ DevOps & Cloud</h4>
              <div class="skill-tags">
                <span class="skill-tag devops">Docker</span>
                <span class="skill-tag devops">AWS</span>
                <span class="skill-tag devops">CI/CD Pipelines</span>
                <span class="skill-tag devops">Containerization</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h4 class="skill-category-title">🤝 Administrative Skills</h4>
              <div class="skill-tags">
                <span class="skill-tag admin">Team Coordination</span>
                <span class="skill-tag admin">Data Confidentiality</span>
                <span class="skill-tag admin">Time Management</span>
                <span class="skill-tag admin">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Experience -->
      <div class="resume-section-card">
        <div class="section-header">
          <h2><span class="section-icon">💼</span>Professional Experience</h2>
        </div>
        <div class="section-content">
          <div class="experience-item">
            <div class="job-header">
              <h3 class="job-title">🤝 Virtual Assistant & Administrative Coordinator</h3>
              <span class="job-type">Remote • Ongoing</span>
            </div>
            <div class="job-responsibilities">
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Provided comprehensive administrative and operational support to cross-functional teams and clients, ensuring seamless workflow management</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Managed multi-channel communication systems, scheduling coordination, and digital tool integration for optimized productivity</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Maintained strict data confidentiality protocols while handling sensitive client information and project documentation</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Implemented efficient organizational systems that improved team productivity by streamlining administrative processes</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="job-header">
              <h3 class="job-title">💻 Full-Stack Software Developer</h3>
              <span class="job-type">Freelance & Contract • Ongoing</span>
            </div>
            <div class="job-responsibilities">
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Developed and deployed robust full-stack web applications using Angular frontend and Express.js backend architectures</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Implemented containerization strategies using Docker and orchestrated cloud deployments on AWS infrastructure</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Collaborated effectively in agile development teams to deliver scalable, maintainable, and high-performance software solutions</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Established CI/CD pipelines to automate testing and deployment processes, reducing deployment time by 60%</span>
              </div>
              <div class="responsibility-item">
                <span class="bullet">✓</span>
                <span>Designed and implemented PostgreSQL database schemas with optimized queries for enhanced application performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education & Certifications -->
      <div class="resume-section-card">
        <div class="section-header">
          <h2><span class="section-icon">🎓</span>Education & Training</h2>
        </div>
        <div class="section-content">
          <div class="education-grid">
            <div class="education-item">
              <div class="degree-info">
                <h4 class="degree-title">📜 Diploma in Information & Communication Technology</h4>
                <p class="institution">National Youth Service Institute of Business Studies • Kenya</p>
                <p class="education-description">
                  Comprehensive foundation in computer systems, programming fundamentals, 
                  database management, and information systems analysis.
                </p>
              </div>
            </div>
            
            <div class="education-item">
              <div class="degree-info">
                <h4 class="degree-title">💻 Software Development Bootcamp</h4>
                <p class="institution">Intensive Training Program at Teach2Give</p>
                <p class="education-description">
                  Advanced training in modern web development technologies, agile methodologies, 
                  and best practices for full-stack application development.
                </p>
              </div>
            </div>
            
            <div class="education-item">
              <div class="degree-info">
                <h4 class="degree-title">🎖️ Paramilitary Training Certification</h4>
                <p class="institution">National Youth Service</p>
                <p class="education-description">
                  Discipline-focused training emphasizing leadership, teamwork, attention to detail, 
                  and operational excellence under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Competencies -->
      <div class="resume-section-card">
        <div class="section-header">
          <h2><span class="section-icon">🌟</span>Key Competencies</h2>
        </div>
        <div class="section-content">
          <div class="competencies-grid">
            <div class="competency-item">
              <div class="competency-icon">🎯</div>
              <h4>Problem Solving</h4>
              <p>Analytical approach to complex technical challenges</p>
            </div>
            <div class="competency-item">
              <div class="competency-icon">⚡</div>
              <h4>Agile Development</h4>
              <p>Experienced in sprint planning and iterative delivery</p>
            </div>
            <div class="competency-item">
              <div class="competency-icon">🤝</div>
              <h4>Team Collaboration</h4>
              <p>Effective communication across diverse teams</p>
            </div>
            <div class="competency-item">
              <div class="competency-icon">📈</div>
              <h4>Process Optimization</h4>
              <p>Continuous improvement mindset and efficiency focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .resume-section {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
      color: #fff;
    }

    .resume-header {
      text-align: center;
      margin-bottom: 40px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .name-title {
      font-size: 2.5rem;
      margin-bottom: 20px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: bold;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .contact-item {
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      backdrop-filter: blur(5px);
    }

    .resume-section-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      margin-bottom: 30px;
      border-radius: 15px;
      overflow: hidden;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .section-header {
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
      padding: 20px 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .section-header h2 {
      margin: 0;
      font-size: 1.4rem;
      color: #ffd54f;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .section-icon {
      font-size: 1.2rem;
    }

    .section-content {
      padding: 25px;
    }

    .summary-text {
      font-size: 1.1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.9);
      text-align: justify;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    .skill-category {
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .skill-category-title {
      color: #00bcd4;
      margin-bottom: 15px;
      font-size: 1rem;
      font-weight: 600;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 500;
      color: white;
    }

    .skill-tag.frontend { background: linear-gradient(135deg, #42a5f5, #1e88e5); }
    .skill-tag.backend { background: linear-gradient(135deg, #66bb6a, #43a047); }
    .skill-tag.devops { background: linear-gradient(135deg, #ff7043, #f4511e); }
    .skill-tag.admin { background: linear-gradient(135deg, #ab47bc, #8e24aa); }

    .experience-item {
      margin-bottom: 35px;
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .experience-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
      flex-wrap: wrap;
      gap: 10px;
    }

    .job-title {
      color: #00bcd4;
      font-size: 1.2rem;
      margin: 0;
      font-weight: 600;
    }

    .job-type {
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .job-responsibilities {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .responsibility-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      line-height: 1.6;
    }

    .bullet {
      color: #4caf50;
      font-weight: bold;
      font-size: 1rem;
      flex-shrink: 0;
    }

    .education-grid {
      display: grid;
      gap: 25px;
    }

    .education-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #ffd54f;
    }

    .degree-title {
      color: #ffd54f;
      margin-bottom: 8px;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .institution {
      color: #00bcd4;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 0.95rem;
    }

    .education-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      font-size: 0.9rem;
    }

    .competencies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .competency-item {
      text-align: center;
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease, background 0.3s ease;
    }

    .competency-item:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
    }

    .competency-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .competency-item h4 {
      color: #00bcd4;
      margin-bottom: 8px;
      font-size: 1rem;
    }

    .competency-item p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.85rem;
      line-height: 1.4;
    }

    strong {
      color: #ffd54f;
      font-weight: 600;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .resume-section {
        padding: 20px 15px;
      }

      .name-title {
        font-size: 2rem;
      }

      .contact-info {
        flex-direction: column;
        align-items: center;
      }

      .job-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .competencies-grid {
        grid-template-columns: 1fr;
      }
    }

    @keyframes slide {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slide {
      animation: slide 1s ease-out;
    }
  `]
})
export class ResumeComponent {}