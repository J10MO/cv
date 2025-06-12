import React, { useState, useEffect } from 'react';
import { Github, Instagram, Send, Mail, Code, Briefcase, User, ExternalLink, Star, GitFork } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Panta Garud Platform",
      description: "Advanced business management platform with comprehensive dashboard, analytics, and workflow automation. Features real-time data processing and multi-user collaboration.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "JWT"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/j10mo/panta-garud",
      stars: 67,
      forks: 24
    },
    {
      id: 2,
      title: "Electronics Store E-Commerce",
      description: "Full-featured electronics e-commerce platform with advanced product filtering, secure payment processing, inventory management, and customer reviews system.",
      tech: ["React", "Express", "MongoDB", "Stripe", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/j10mo/electronics-store",
      stars: 89,
      forks: 42
    },
    {
      id: 3,
      title: "Project Management System",
      description: "Enterprise-level project management solution with task tracking, team collaboration, time logging, reporting dashboard, and milestone management.",
      tech: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/j10mo/project-manager",
      stars: 73,
      forks: 31
    },
    {
      id: 4,
      title: "Doctor Appointment System",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, prescription management, and telemedicine capabilities.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "WebRTC", "JWT"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/j10mo/doctor-app",
      stars: 94,
      forks: 38
    },
    {
      id: 5,
      title: "Beauty Center Management",
      description: "Complete beauty salon management system with appointment booking, service catalog, staff scheduling, customer profiles, and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Twilio", "Stripe"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=250&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/j10mo/beauty-center",
      stars: 52,
      forks: 19
    },
    {
      id: 6,
      title: "Enterprise CRM Solution",
      description: "Customer relationship management system with lead tracking, sales pipeline, automated marketing campaigns, and comprehensive analytics dashboard.",
      tech: ["React", "Django", "PostgreSQL", "Redis", "Celery"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      demoUrl: "#",
      codeUrl: "https://github.com/j10mo/enterprise-crm",
      stars: 108,
      forks: 56
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Node.js", 
    "Express", "Laravel", "Django", "Spring Boot", "MongoDB", "PostgreSQL", 
    "MySQL", "Redis", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
    "Git", "Docker", "AWS", "Azure", "Firebase", "Heroku", "JWT", "OAuth",
    "REST APIs", "GraphQL", "Socket.io", "WebRTC", "Stripe", "PayPal"
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jasem Mohammed
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Jasem Mohammed
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-200">
            Senior Web Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Specialized in creating scalable web applications and enterprise solutions. 
            Transforming complex business requirements into elegant, user-friendly digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <User className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold">Professional Journey</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a passionate senior web developer with over 4 years of extensive experience building enterprise-level applications and complex business solutions. 
                  My expertise encompasses full-stack development with specialization in healthcare systems, e-commerce platforms, project management tools, and business automation. 
                  I excel at transforming challenging business requirements into scalable, maintainable, and user-centric applications.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold">Expertise</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From concept to deployment, I architect and develop comprehensive solutions including healthcare management systems, 
                  e-commerce platforms, project management tools, and beauty center management systems. My approach emphasizes clean code, 
                  scalable architecture, security best practices, and optimal performance. I have successfully delivered enterprise solutions 
                  that serve thousands of users across various industries.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-gray-900 border border-gray-700 rounded-lg p-3 text-center hover:border-blue-400 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'animate-pulse' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Here's a showcase of my enterprise-level projects spanning healthcare, e-commerce, project management, 
              and business automation. Each project demonstrates my ability to deliver comprehensive solutions that 
              solve real-world business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Star size={16} className="mr-1" />
                        {project.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork size={16} className="mr-1" />
                        {project.forks}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="mailto:jasem2000704@gmail.com"
              className="flex flex-col items-center p-6 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail className="text-blue-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">jasem2000704@gmail.com</p>
            </a>
            
            <a
              href="https://github.com/j10mo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-900 border border-gray-700 rounded-xl hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Github className="text-purple-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@j10mo</p>
            </a>
            
            <a
              href="https://instagram.com/j10mo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-900 border border-gray-700 rounded-xl hover:border-pink-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <Instagram className="text-pink-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-gray-400 text-sm">@j10mo</p>
            </a>
            
            <a
              href="https://t.me/j10mo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Send className="text-cyan-400 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-gray-400 text-sm">@j10mo</p>
            </a>
          </div>
          
          <div className="text-center">
            <a
              href="mailto:jasem2000704@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-3" size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Jasem Mohammed. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;