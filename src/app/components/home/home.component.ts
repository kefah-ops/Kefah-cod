import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  left: string;
  animationDelay: string;
  animationDuration: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

interface Skill {
  name: string;
  icon: string;
  level: number;
  animated: boolean;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('servicesSection', { static: false }) servicesSection!: ElementRef;

  particleArray: Particle[] = [];
  services: Service[] = [];
  skillCategories: SkillCategory[] = [];
  activeService = -1;
  currentGreeting = 'Hello World!';
  currentRole = 'Angular Development';
  
  private greetings = ['Hello World!', 'Jambo!', 'Hola!', 'Bonjour!', 'Guten Tag!', 'Niatia!'];
  private roles = [
    'Angular Development',
    'TypeScript Solutions',
    'Backend Development',
    'Database Design',
    'AI Integration',
    'Virtual Assistance'
  ];
  
  private greetingInterval: any;
  private roleInterval: any;

  // Image properties with error handling and fallback
  profileImageUrl = 'assets/images/profile.jpg';
  profileImageAlt = 'Kefah Ndirangu - Full-Stack Developer & AI Virtual Assistant';
  imageLoaded = false;
  imageError = false;
  fallbackImageUrl = 'assets/images/default-avatar.jpg'; // Fallback image

  ngOnInit(): void {
    this.initializeParticles();
    this.initializeServices();
    this.initializeSkills();
    this.startTextAnimations();
  }

  ngAfterViewInit(): void {
    this.animateSkillsOnLoad();
  }

  ngOnDestroy(): void {
    if (this.greetingInterval) {
      clearInterval(this.greetingInterval);
    }
    if (this.roleInterval) {
      clearInterval(this.roleInterval);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  // Image handling methods
  onImageLoad(): void {
    this.imageLoaded = true;
    this.imageError = false;
  }

  onImageError(): void {
    this.imageError = true;
    this.imageLoaded = false;
    // Try fallback image or use a placeholder
    if (this.profileImageUrl !== this.fallbackImageUrl) {
      this.profileImageUrl = this.fallbackImageUrl;
    }
  }

  // Method to get the current image source
  getCurrentImageUrl(): string {
    return this.imageError ? this.fallbackImageUrl : this.profileImageUrl;
  }

  // Method to generate placeholder avatar with initials
  getInitialsAvatar(): string {
    const initials = 'KN'; // Your initials
    return `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.35em' font-family='Arial, sans-serif' font-size='80' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`;
  }

  initializeParticles(): void {
    for (let i = 0; i < 50; i++) {
      this.particleArray.push({
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 20 + 's',
        animationDuration: (Math.random() * 10 + 15) + 's'
      });
    }
  }

  initializeServices(): void {
    this.services = [
      {
        icon: '🚀',
        title: 'Full-Stack Development',
        description: 'End-to-end web application development using modern technologies and best practices.',
        technologies: ['Angular', 'TypeScript', 'Express.js', 'PostgreSQL', 'Node.js'],
        features: [
          'Responsive Design UI UX DESIGN',
          'Real-time Features Web Development',
          'API Integration',
          'Database Optimization',
          'DevOps'
        ]
      },
      {
        icon: '🤖',
        title: 'AI Virtual Assistant',
        description: 'Intelligent automation and assistance powered by cutting-edge AI technology.',
        technologies: ['Claude AI', 'OpenAI', 'Natural Language Processing', 'Machine Learning'],
        features: [
          'Task Automation',
          'Content Generation',
          'Calendar and Bookings',
          '24/7 Availability',
          'Project Management Trello'
        ]
      },
      {
        icon: '⚡',
        title: 'Performance Optimization',
        description: 'Enhance your application\'s speed, efficiency, and user experience.',
        technologies: ['Webpack', 'Lazy Loading', 'Caching', 'CDN Integration'],
        features: [
          'Speed Optimization',
          'Bundle Analysis',
          'Memory Management',
          'Core Web Vitals'
        ]
      }
    ];
  }

  initializeSkills(): void {
    this.skillCategories = [
      {
        name: 'Frontend Development',
        skills: [
          { name: 'Angular', icon: '🅰️', level: 95, animated: false },
          { name: 'TypeScript', icon: '🔷', level: 90, animated: false },
          { name: 'JavaScript', icon: '🟨', level: 92, animated: false },
          { name: 'HTML/CSS', icon: '🎨', level: 88, animated: false },
          { name: 'DevOps', icon: '🚀', level: 91, animated: false },
        ]
      },
      {
        name: 'Backend Development',
        skills: [
          { name: 'Node.js', icon: '🟢', level: 85, animated: false },
          { name: 'Express.js', icon: '🚀', level: 80, animated: false },
          { name: 'PostgreSQL', icon: '🐘', level: 82, animated: false },
          { name: 'MongoDB', icon: '🍃', level: 75, animated: false }
        ]
      },
      {
        name: 'AI & Automation',
        skills: [
          { name: 'Claude AI', icon: '🧠', level: 90, animated: false },
          { name: 'OpenAI APIs', icon: '🤖', level: 85, animated: false },
          { name: 'Skill Match AI', icon: '📊', level: 70, animated: false },
          { name: 'Chat GPT', icon: '🤖', level: 78, animated: false }
        ]
      }
    ];
  }

  startTextAnimations(): void {
    // Rotate greetings every 3 seconds
    this.greetingInterval = setInterval(() => {
      const currentIndex = this.greetings.indexOf(this.currentGreeting);
      const nextIndex = (currentIndex + 1) % this.greetings.length;
      this.currentGreeting = this.greetings[nextIndex];
    }, 3000);

    // Rotate roles every 2.5 seconds
    this.roleInterval = setInterval(() => {
      const currentIndex = this.roles.indexOf(this.currentRole);
      const nextIndex = (currentIndex + 1) % this.roles.length;
      this.currentRole = this.roles[nextIndex];
    }, 2500);
  }

  animateSkillsOnLoad(): void {
    setTimeout(() => {
      this.skillCategories.forEach(category => {
        category.skills.forEach((skill: Skill) => {
          skill.animated = true;
        });
      });
    }, 1000);
  }

  setActiveService(index: number): void {
    this.activeService = index;
  }

  animateSkillLevel(skill: Skill): void {
    skill.animated = true;
  }

  scrollToServices(): void {
    if (this.servicesSection) {
      this.servicesSection.nativeElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToContact(): void {
    // Implement scroll to contact section
    console.log('Scrolling to contact section...');
  }

  startProject(): void {
    // Implement project start functionality
    console.log('Starting new project...');
  }

  viewPortfolio(): void {
    // Implement portfolio view functionality
    console.log('Viewing portfolio...');
  }
}