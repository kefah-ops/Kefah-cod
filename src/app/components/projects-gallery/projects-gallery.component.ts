import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class ProjectsGalleryComponent {
  selectedProject: any = null;
  currentFilter = 'all';

  projects = [
    {
      id: 1,
      image: 'assets/kefah.jpg',
      title: 'Professional Portfolio',
      category: 'web',
      description: 'A comprehensive showcase of my professional journey, featuring modern design principles and responsive layouts that adapt beautifully across all devices.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Responsive Design'],
      features: [
        'Modern, clean interface design',
        'Fully responsive across all devices',
        'Smooth animations and transitions',
        'SEO optimized structure'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 2,
      image: 'assets/skill-match.png',
      title: 'AI Resume Builder',
      category: 'ai',
      description: 'Revolutionary AI-powered resume builder that analyzes job descriptions and optimizes your resume content for maximum impact and ATS compatibility.',
      technologies: ['Angular', 'OpenAI API', 'Node.js', 'Machine Learning'],
      features: [
        'AI-powered content optimization',
        'ATS-friendly template generation',
        'Real-time job match scoring',
        'Multiple export formats (PDF, Word)'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 3,
      image: 'assets/tradingbot.png',
      title: 'Automated Trading Bot',
      category: 'fintech',
      description: 'Sophisticated algorithmic trading system built for MetaTrader 5, featuring advanced risk management, technical analysis, and real-time market monitoring.',
      technologies: ['MQL5', 'Python', 'MetaTrader 5', 'Technical Analysis'],
      features: [
        'Advanced technical indicator analysis',
        'Automated risk management system',
        'Multi-timeframe strategy execution',
        'Real-time performance monitoring'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 4,
      image: 'assets/skillmatchai analytics.png',
      title: 'Job Portal Analytics Dashboard',
      category: 'web',
      description: 'Comprehensive analytics platform for job portals, providing deep insights into hiring trends, candidate matching efficiency, and recruitment performance metrics.',
      technologies: ['Angular', 'D3.js', 'PostgreSQL', 'Chart.js'],
      features: [
        'Real-time hiring analytics',
        'Interactive data visualizations',
        'Candidate-job matching insights',
        'Customizable reporting dashboards'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 5,
      image: 'assets/twitter-clone.png',
      title: 'Social Media Platform',
      category: 'web',
      description: 'Full-featured social media application with real-time messaging, content sharing, and advanced user interaction features inspired by modern social platforms.',
      technologies: ['Angular', 'Firebase', 'Real-time Database', 'PWA'],
      features: [
        'Real-time messaging and notifications',
        'Media sharing and content management',
        'User authentication and profiles',
        'Progressive Web App capabilities'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 6,
      image: 'assets/explorer.png',
      title: 'World Explorer App',
      category: 'mobile',
      description: 'Interactive travel and exploration application featuring 3D maps, cultural information, travel guides, and personalized recommendations for global destinations.',
      technologies: ['Angular', 'Google Maps API', 'Three.js', 'Geolocation'],
      features: [
        '3D interactive world maps',
        'Cultural and historical information',
        'Personalized travel recommendations',
        'Offline map capabilities'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 7,
      image: 'assets/analytics.png',
      title: 'Advanced Analytics Platform',
      category: 'analytics',
      description: 'Powerful business intelligence platform providing comprehensive data analytics, predictive modeling, and actionable insights for data-driven decision making.',
      technologies: ['Angular', 'Python', 'TensorFlow', 'Data Visualization'],
      features: [
        'Advanced statistical analysis',
        'Predictive modeling and forecasting',
        'Interactive data exploration',
        'Automated report generation'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 8,
      image: 'assets/Trello.png',
      title: 'Project Management Suite',
      category: 'productivity',
      description: 'Comprehensive project management solution with Kanban boards, team collaboration tools, time tracking, and advanced project analytics for enhanced productivity.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      features: [
        'Kanban-style project boards',
        'Real-time team collaboration',
        'Time tracking and reporting',
        'Advanced project analytics'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 9,
      image: 'assets/4.png',
      title: 'Virtual Assistant Certification',
      category: 'certification',
      description: 'Professional certification in Virtual Assistant services, demonstrating expertise in remote work management, client communication, and digital productivity tools.',
      technologies: ['Remote Work', 'Client Management', 'Digital Tools', 'Communication'],
      features: [
        'Client relationship management',
        'Digital productivity expertise',
        'Remote work optimization',
        'Professional communication skills'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'certified',
      year: '2023'
    },
    {
      id: 10,
      image: 'assets/Mylogo.png',
      title: 'Personal Brand Identity',
      category: 'design',
      description: 'Custom-designed personal brand identity and logo, reflecting my professional values, technical expertise, and creative approach to problem-solving.',
      technologies: ['Adobe Illustrator', 'Brand Design', 'Typography', 'Color Theory'],
      features: [
        'Unique brand identity design',
        'Scalable vector graphics',
        'Professional color palette',
        'Versatile logo applications'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 11,
      image: 'assets/docker.png',
      title: 'Docker Containerization',
      category: 'devops',
      description: 'Advanced containerization solutions using Docker, including multi-stage builds, orchestration, and deployment automation for scalable application infrastructure.',
      technologies: ['Docker', 'Kubernetes', 'CI/CD', 'DevOps'],
      features: [
        'Multi-stage Docker builds',
        'Container orchestration',
        'Automated deployment pipelines',
        'Scalable infrastructure management'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    }
  ];

  categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
    { id: 'fintech', name: 'FinTech', icon: '💰' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'analytics', name: 'Data Analytics', icon: '📊' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'devops', name: 'DevOps', icon: '🚀' },
    { id: 'certification', name: 'Certifications', icon: '🏆' }
  ];

  get filteredProjects() {
    if (this.currentFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.currentFilter);
  }

  selectProject(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return '#4CAF50';
      case 'in-progress': return '#FF9800';
      case 'certified': return '#2196F3';
      default: return '#9E9E9E';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'certified': return '🏆';
      default: return '📋';
    }
  }

  // TrackBy function for performance optimization
  trackByProjectId(index: number, project: any): number {
    return project.id;
  }

  // TrackBy function for categories
  trackByCategoryId(index: number, category: any): string {
    return category.id;
  }
}