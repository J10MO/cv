import React, { useState, useEffect } from 'react';
import { Github, Instagram, Send, Mail, Code, Briefcase, User, ExternalLink, Star, GitFork, Zap, Award, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      forks: 24,
      gradient: "from-cyan-500 to-blue-500"
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
      forks: 42,
      gradient: "from-purple-500 to-pink-500"
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
      forks: 31,
      gradient: "from-green-500 to-teal-500"
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
      forks: 38,
      gradient: "from-red-500 to-orange-500"
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
      forks: 19,
      gradient: "from-pink-500 to-rose-500"
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
      forks: 56,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Node.js", 
    "Express", "Laravel", "Django", "Spring Boot", "MongoDB", "PostgreSQL", 
    "MySQL", "Redis", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
    "Git", "Docker", "AWS", "Azure", "Firebase", "Heroku", "JWT", "OAuth",
    "REST APIs", "GraphQL", "Socket.io", "WebRTC", "Stripe", "PayPal"
  ];

  const achievements = [
    { icon: Award, count: "50+", label: "Projects Completed", color: "text-yellow-400" },
    { icon: TrendingUp, count: "4+", label: "Years Experience", color: "text-green-400" },
    { icon: Zap, count: "100K+", label: "Lines of Code", color: "text-blue-400" },
    { icon: Star, count: "500+", label: "GitHub Stars", color: "text-purple-400" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        ></div>
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl  border-b border-white/10 z-50">
        <div className="max-w-7xl  mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Jasem Mohammed
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section} 
                  onClick={() => scrollToSection(section)}
                  className={`capitalize relative py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/10 ${
                    activeSection === section 
                      ? 'text-blue-400 bg-white/10' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="mt-22 relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className={`text-center transform transition-all duration-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="mb-12">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                <Code size={64} className="text-white animate-pulse" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Jasem Mohammed
            </span>
          </h1>
          
          <div className="relative mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
              Senior Web Developer
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Specialized in creating <span className="text-blue-400 font-semibold">scalable web applications</span> and 
            <span className="text-purple-400 font-semibold"> enterprise solutions</span>. 
            Transforming complex business requirements into elegant, user-friendly digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center">
                <Zap className="mr-3" size={20} />
                View My Work
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-10 py-4 border-2 border-gray-600 rounded-2xl font-bold text-lg bg-white/5 backdrop-blur-sm hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                <Mail className="mr-3 group-hover:animate-bounce" size={20} />
                Get In Touch
              </span>
            </button>
          </div>
          
          {/* Achievements Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <achievement.icon className={`${achievement.color} mb-3 mx-auto group-hover:animate-pulse`} size={32} />
                <div className="text-2xl font-bold mb-1">{achievement.count}</div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Professional Journey
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  I am a passionate senior web developer with over 4 years of extensive experience building enterprise-level applications and complex business solutions. 
                  My expertise encompasses full-stack development with specialization in healthcare systems, e-commerce platforms, project management tools, and business automation. 
                  I excel at transforming challenging business requirements into scalable, maintainable, and user-centric applications.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Expertise
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  From concept to deployment, I architect and develop comprehensive solutions including healthcare management systems, 
                  e-commerce platforms, project management tools, and beauty center management systems. My approach emphasizes clean code, 
                  scalable architecture, security best practices, and optimal performance. I have successfully delivered enterprise solutions 
                  that serve thousands of users across various industries.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technical Arsenal
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                        isVisible ? 'animate-fade-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-xs font-medium group-hover:text-blue-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Here's a showcase of my <span className="text-blue-400 font-semibold">enterprise-level projects</span> spanning healthcare, e-commerce, project management, 
              and business automation. Each project demonstrates my ability to deliver comprehensive solutions that 
              solve real-world business challenges.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  boxShadow: '0 0 50px rgba(59, 130, 246, 0.1)'
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                        <Star size={14} className="mr-1 text-yellow-400" />
                        {project.stars}
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                        <GitFork size={14} className="mr-1 text-green-400" />
                        {project.forks}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full text-sm border border-white/20 backdrop-blur-sm hover:scale-110 transition-transform duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className={`group/btn flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                    >
                      <ExternalLink size={16} className="mr-2 group-hover/btn:animate-bounce" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center px-6 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
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
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together on something amazing!
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { href: "mailto:jasem2000704@gmail.com", icon: Mail, title: "Email", subtitle: "jasem2000704@gmail.com", color: "blue", gradient: "from-blue-500 to-cyan-500" },
              { href: "https://github.com/j10mo", icon: Github, title: "GitHub", subtitle: "@j10mo", color: "purple", gradient: "from-purple-500 to-pink-500" },
              { href: "https://instagram.com/j10mo", icon: Instagram, title: "Instagram", subtitle: "@j10mo", color: "pink", gradient: "from-pink-500 to-rose-500" },
              { href: "https://t.me/j10mo", icon: Send, title: "Telegram", subtitle: "@j10mo", color: "cyan", gradient: "from-cyan-500 to-blue-500" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  boxShadow: `0 0 30px rgba(59, 130, 246, 0.1)`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:animate-pulse`}>
                  <contact.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  {contact.subtitle}
                </p>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="mailto:jasem2000704@gmail.com"
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Mail className="mr-4 group-hover:animate-bounce relative z-10" size={24} />
              <span className="relative z-10">Start a Conversation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              Jasem Mohammed
            </div>
            <p className="text-gray-400 font-light">
              Senior Web Developer | Enterprise Solutions Architect
            </p>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-500 font-light">
            © 2025 Jasem Mohammed. Crafted with React & Tailwind CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;