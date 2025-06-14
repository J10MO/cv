// import React, { useState, useEffect } from 'react';
// import { Github, Instagram, Send, Mail, Code, Briefcase, User, ExternalLink, Star, GitFork, Zap, Award, TrendingUp, GraduationCap, BookOpen, Trophy, Sparkles } from 'lucide-react';

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "Panta Security System",
//       description: "Advanced security management platform with comprehensive access control, real-time monitoring, and automated threat detection. Features multi-level authentication and enterprise-grade security protocols.",
//       tech: ["React", "Node.js", "PostgreSQL", "JWT", "WebSocket"],
//       image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
//       demoUrl: "https://pantagaurd.netlify.app/login",
//       codeUrl: "https://github.com/j10mo/panta-garud",
//       stars: 87,
//       forks: 34,
//       gradient: "from-emerald-400 via-cyan-500 to-blue-600"
//     },
//     {
//       id: 2,
//       title: "StyleH Electronics Store",
//       description: "Premium e-commerce platform with sophisticated product catalog, advanced filtering system, secure payment processing, and comprehensive inventory management with real-time analytics.",
//       tech: ["React", "Express", "MongoDB", "Stripe", "Redis"],
//       image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
//       demoUrl: "https://styleh.netlify.app/",
//       codeUrl: "https://github.com/j10mo/electronics-store",
//       stars: 142,
//       forks: 58,
//       gradient: "from-purple-400 via-pink-500 to-rose-600"
//     },
//     {
//       id: 3,
//       title: "Project Management System",
//       description: "Enterprise-level project management solution with advanced task tracking, team collaboration tools, time logging, comprehensive reporting dashboard, and milestone management with AI-powered insights.",
//       tech: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Chart.js"],
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
//       demoUrl: "https://pmsy.netlify.app/",
//       codeUrl: "https://github.com/j10mo/project-manager",
//       stars: 156,
//       forks: 67,
//       gradient: "from-green-400 via-emerald-500 to-teal-600"
//     },
//     {
//       id: 4,
//       title: "Doctor Appointment System",
//       description: "Comprehensive healthcare management platform with patient records, intelligent appointment scheduling, prescription management, telemedicine capabilities, and integrated health analytics.",
//       tech: ["Angular", "Spring Boot", "PostgreSQL", "WebRTC", "JWT"],
//       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
//       demoUrl: "https://dctore.netlify.app/",
//       codeUrl: "https://github.com/j10mo/doctor-app",
//       stars: 198,
//       forks: 89,
//       gradient: "from-red-400 via-orange-500 to-amber-600"
//     },
//     {
//       id: 5,
//       title: "Beauty Center Management",
//       description: "Luxury beauty salon management system with premium appointment booking, comprehensive service catalog, staff scheduling, detailed customer profiles, and integrated payment processing.",
//       tech: ["React", "Node.js", "MongoDB", "Twilio", "Stripe"],
//       image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
//       demoUrl: "https://github.com/SAFAWI0/My-Center",
//       codeUrl: "https://github.com/SAFAWI0/My-Center",
//       stars: 78,
//       forks: 29,
//       gradient: "from-pink-400 via-rose-500 to-red-500"
//     },
//     {
//       id: 6,
//       title: "My Center API Backend",
//       description: "Robust backend API system for beauty center management with microservices architecture, real-time data processing, comprehensive authentication, and scalable cloud infrastructure.",
//       tech: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
//       demoUrl: "https://github.com/SAFAWI0/My-Center-API",
//       codeUrl: "https://github.com/SAFAWI0/My-Center-API",
//       stars: 65,
//       forks: 23,
//       gradient: "from-indigo-400 via-purple-500 to-blue-600"
//     }
//   ];

//   const skills = [
//     "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Node.js", 
//     "Express", "Laravel", "Django", "Spring Boot", "MongoDB", "PostgreSQL", 
//     "MySQL", "Redis", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
//     "Git", "Docker", "AWS", "Azure", "Firebase", "Heroku", "JWT", "OAuth",
//     "REST APIs", "GraphQL", "Socket.io", "WebRTC", "Stripe", "PayPal",
//     "Microservices", "DevOps", "CI/CD", "Kubernetes"
//   ];

//   const achievements = [
//     { icon: Award, count: "50+", label: "Projects Completed", color: "text-amber-400" },
//     { icon: TrendingUp, count: "4+", label: "Years Experience", color: "text-emerald-400" },
//     { icon: Zap, count: "100K+", label: "Lines of Code", color: "text-blue-400" },
//     { icon: Star, count: "500+", label: "GitHub Stars", color: "text-purple-400" }
//   ];

//   const education = [
//     {
//       icon: GraduationCap,
//       title: "Bachelor's Degree",
//       institution: "University of Baghdad",
//       field: "Computer Science",
//       year: "2022",
//       gradient: "from-blue-500 to-cyan-500",
//       description: "Graduated with comprehensive knowledge in software engineering, algorithms, and computer systems."
//     },
//     {
//       icon: Trophy,
//       title: "Full Stack Web Development",
//       institution: "AON Academy",
//       field: "Web Development Certification",
//       year: "2022",
//       gradient: "from-purple-500 to-pink-500",
//       description: "Intensive program covering modern web technologies and full-stack development practices."
//     },
//     {
//       icon: BookOpen,
//       title: "Advanced Courses",
//       institution: "Udemy & Earthlink",
//       field: "Project Management & Web Development",
//       year: "2021-2024",
//       gradient: "from-green-500 to-emerald-500",
//       description: "Multiple specialized courses in project management, advanced web technologies, and software architecture."
//     }
//   ];

//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Ultra Luxury Animated Background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
//         {/* Dynamic Gradient Overlay */}
//         <div 
//           className="absolute inset-0 opacity-30 transition-all duration-300"
//           style={{
//             background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.1) 40%, transparent 70%)`
//           }}
//         ></div>
        
//         {/* Premium Floating Orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
        
//         {/* Luxury Particles */}
//         <div className="absolute inset-0 opacity-20">
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-twinkle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${2 + Math.random() * 3}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Premium Navigation */}
//       <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-2xl border-b border-white/5 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//               <span className="relative">
//                 Jasem Mohammed
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
//               </span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
//                 <button
//                   key={section} 
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize relative py-3 px-6 rounded-2xl transition-all duration-500 backdrop-blur-sm ${
//                     activeSection === section 
//                       ? 'text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30' 
//                       : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
//                   }`}
//                 >
//                   {section}
//                   {activeSection === section && (
//                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Ultra Luxury Hero Section */}
//       <section id="home" className="mt-20 relative min-h-screen flex items-center justify-center px-6 z-10">
//         <div className={`text-center transform transition-all duration-2000 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//         }`}>
//           <div className="mb-12">
//             <div className="relative w-48 h-48 mx-auto mb-12">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-luxury-spin"></div>
//               <div className="absolute inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full animate-luxury-spin-reverse"></div>
//               <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center backdrop-blur-xl">
//                 <Code size={80} className="text-white animate-pulse-glow" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
//             </div>
//           </div>
          
//           <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-luxury-gradient text-shadow-luxury">
//               Jasem Mohammed
//             </span>
//           </h1>
          
//           <div className="relative mb-12">
//             <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-200">
//               <span className="relative">
//                 Senior Web Developer
//                 <Sparkles className="absolute -top-2 -right-8 text-amber-400 animate-spin-slow" size={24} />
//               </span>
//             </h2>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl -z-10"></div>
//           </div>
          
//           <p className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
//             Crafting <span className="text-blue-400 font-semibold">extraordinary digital experiences</span> and 
//             <span className="text-purple-400 font-semibold"> enterprise solutions</span> with precision and innovation.
//             <br className="hidden md:block" />
//             Transforming complex visions into elegant, scalable realities.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-3xl font-bold text-xl overflow-hidden transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
//               <span className="relative flex items-center">
//                 <Zap className="mr-4 group-hover:animate-bounce" size={24} />
//                 Explore My Portfolio
//               </span>
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="group px-12 py-6 border-2 border-gradient-to-r from-blue-400 to-purple-400 rounded-3xl font-bold text-xl bg-white/5 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500 transform hover:scale-110"
//               style={{
//                 borderImage: 'linear-gradient(45deg, #60a5fa, #a855f7) 1'
//               }}
//             >
//               <span className="flex items-center">
//                 <Mail className="mr-4 group-hover:animate-bounce" size={24} />
//                 Let's Collaborate
//               </span>
//             </button>
//           </div>
          
//           {/* Premium Achievements Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {achievements.map((achievement, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 hover:shadow-2xl ${
//                   isVisible ? 'animate-fade-in-up' : ''
//                 }`}
//                 style={{ 
//                   animationDelay: `${index * 200}ms`,
//                   boxShadow: '0 0 40px rgba(139, 92, 246, 0.1)'
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <achievement.icon className={`${achievement.color} mb-4 mx-auto group-hover:animate-pulse-glow relative z-10`} size={40} />
//                 <div className="text-3xl font-black mb-2 relative z-10">{achievement.count}</div>
//                 <div className="text-gray-300 text-sm font-light relative z-10">{achievement.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Luxury About Section */}
//       <section id="about" className="relative py-32 px-6 z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-24">
//             <h2 className="text-6xl md:text-8xl font-black mb-12">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//                 About Me
//               </span>
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div className="space-y-16">
//               <div className="group">
//                 <div className="flex items-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mr-6 group-hover:animate-pulse-glow">
//                     <User className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                     Professional Excellence
//                   </h3>
//                 </div>
//                 <p className="text-gray-200 text-xl leading-relaxed font-light">
//                   I am a passionate senior web developer with over 4 years of extensive experience building enterprise-level applications and complex business solutions. 
//                   My expertise encompasses full-stack development with specialization in healthcare systems, e-commerce platforms, project management tools, and business automation. 
//                   I excel at transforming challenging business requirements into scalable, maintainable, and user-centric applications that drive real business value.
//                 </p>
//               </div>
              
//               <div className="group">
//                 <div className="flex items-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mr-6 group-hover:animate-pulse-glow">
//                     <Briefcase className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     Innovation & Impact
//                   </h3>
//                 </div>
//                 <p className="text-gray-200 text-xl leading-relaxed font-light">
//                   From concept to deployment, I architect and develop comprehensive solutions including healthcare management systems, 
//                   premium e-commerce platforms, advanced project management tools, and sophisticated security systems. My approach emphasizes clean code, 
//                   scalable architecture, security best practices, and optimal performance. I have successfully delivered enterprise solutions 
//                   that serve thousands of users across various industries with measurable business impact.
//                 </p>
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
//               <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10">
//                 <h3 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                   Technical Mastery
//                 </h3>
//                 <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//                   {skills.map((skill, index) => (
//                     <div
//                       key={skill}
//                       className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 ${
//                         isVisible ? 'animate-fade-in-up' : ''
//                       }`}
//                       style={{ animationDelay: `${index * 30}ms` }}
//                     >
//                       <span className="text-sm font-semibold group-hover:text-blue-300 transition-colors duration-300">
//                         {skill}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Luxury Education Section */}
//       <section id="education" className="relative py-32 px-6 z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center mb-24">
//             <h2 className="text-6xl md:text-8xl font-black mb-12">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//                 Education & Certifications
//               </span>
//             </h2>
//             <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
//               A foundation of <span className="text-blue-400 font-semibold">academic excellence</span> combined with 
//               <span className="text-purple-400 font-semibold"> continuous learning</span> and professional development.
//             </p>
//             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-8"></div>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-12">
//             {education.map((edu, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:shadow-2xl ${
//                   isVisible ? 'animate-fade-in-up' : ''
//                 }`}
//                 style={{ 
//                   animationDelay: `${index * 300}ms`,
//                   boxShadow: '0 0 60px rgba(139, 92, 246, 0.1)'
//                 }}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
//                 <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-r ${edu.gradient} rounded-3xl flex items-center justify-center group-hover:animate-pulse-glow relative z-10`}>
//                   <edu.icon className="text-white" size={40} />
//                 </div>
                
//                 <div className="text-center relative z-10">
//                   <h3 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors duration-300">
//                     {edu.title}
//                   </h3>
//                   <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
//                     {edu.institution}
//                   </h4>
//                   <p className="text-gray-300 text-lg mb-3 font-semibold">
//                     {edu.field}
//                   </p>
//                   <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6 border border-white/20">
//                     {edu.year}
//                   </div>
//                   <p className="text-gray-300 leading-relaxed font-light">
//                     {edu.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Ultra Luxury Projects Section */}
//       <section id="projects" className="relative py-32 px-6 z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center mb-24">
//             <h2 className="text-6xl md:text-8xl font-black mb-12">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//                 Featured Projects
//               </span>
//             </h2>
//             <p className="text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
//               A curated collection of <span className="text-blue-400 font-semibold">enterprise-level solutions</span> that demonstrate 
//               my expertise in building scalable, secure, and innovative applications across diverse industries.
//             </p>
//             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-8"></div>
//           </div>
          
//           <div className="grid lg:grid-cols-2 gap-12">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:shadow-2xl ${
//                   isVisible ? 'animate-fade-in-up' : ''
//                 }`}
//                 style={{ 
//                   animationDelay: `${index * 200}ms`,
//                   boxShadow: '0 0 80px rgba(139, 92, 246, 0.15)'
//                 }}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
//                   <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
//                   {/* Premium Project Stats */}
//                   <div className="absolute top-6 right-6 flex space-x-3">
//                     <div className="flex items-center bg-black/50 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
//                       <Star size={16} className="mr-2 text-amber-400" />
//                       <span className="text-white font-bold">{project.stars}</span>
//                     </div>
//                     <div className="flex items-center bg-black/50 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
//                       <GitFork size={16} className="mr-2 text-emerald-400" />
//                       <span className="text-white font-bold">{project.forks}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-10 relative z-10">
//                   <h3 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
                  
//                   <p className="text-gray-200 mb-8 leading-relaxed font-light text-lg">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-3 mb-8">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-2xl text-sm border border-white/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300 font-semibold`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex space-x-6">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`group/btn flex items-center px-8 py-4 bg-gradient-to-r ${project.gradient} rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2`}
//                     >
//                       <ExternalLink size={20} className="mr-3 group-hover/btn:animate-bounce" />
//                       Live Demo
//                     </a>
//                     <a
//                       href={project.codeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-xl rounded-2xl text-lg font-bold hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/20 transition-all duration-500 transform hover:scale-110"
//                     >
//                       <Github size={20} className="mr-3" />
//                       Source Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Ultra Luxury Contact Section */}
//       <section id="contact" className="relative py-32 px-6 z-10">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-6xl md:text-8xl font-black mb-12">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//               Let's Create Together
//             </span>
//           </h2>
//           <p className="text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed font-light">
//             Ready to bring your vision to life? I'm passionate about collaborating on projects that push boundaries 
//             and create meaningful impact. Let's discuss how we can build something extraordinary together.
//           </p>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
//             {[
//               { href: "mailto:jasem2000704@gmail.com", icon: Mail, title: "Email", subtitle: "jasem2000704@gmail.com", color: "blue", gradient: "from-blue-500 to-cyan-500" },
//               { href: "https://github.com/j10mo", icon: Github, title: "GitHub", subtitle: "@j10mo", color: "purple", gradient: "from-purple-500 to-pink-500" },
//               { href: "https://instagram.com/j10mo", icon: Instagram, title: "Instagram", subtitle: "@j10mo", color: "pink", gradient: "from-pink-500 to-rose-500" },
//               { href: "https://t.me/j10mo", icon: Send, title: "Telegram", subtitle: "@j10mo", color: "cyan", gradient: "from-cyan-500 to-blue-500" }
//             ].map((contact, index) => (
//               <a
//                 key={index}
//                 href={contact.href}
//                 target={contact.href.startsWith('http') ? '_blank' : undefined}
//                 rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                 className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-700 transform hover:scale-110 hover:-translate-y-6 ${
//                   isVisible ? 'animate-fade-in-up' : ''
//                 }`}
//                 style={{ 
//                   animationDelay: `${index * 150}ms`,
//                   boxShadow: `0 0 60px rgba(139, 92, 246, 0.15)`
//                 }}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
//                 <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${contact.gradient} rounded-3xl flex items-center justify-center group-hover:animate-pulse-glow relative z-10`}>
//                   <contact.icon className="text-white" size={36} />
//                 </div>
//                 <h3 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
//                   {contact.title}
//                 </h3>
//                 <p className="text-gray-300 font-light relative z-10">
//                   {contact.subtitle}
//                 </p>
//               </a>
//             ))}
//           </div>
          
//           <div className="text-center">
//             <a
//               href="mailto:jasem2000704@gmail.com"
//               className="group inline-flex items-center px-16 py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl font-black text-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 relative overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
//               <Mail className="mr-6 group-hover:animate-bounce relative z-10" size={32} />
//               <span className="relative z-10">Start Our Journey</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Premium Footer */}
//       <footer className="relative border-t border-white/10 py-16 px-6 z-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="mb-8">
//             <div className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
//               Jasem Mohammed
//             </div>
//             <p className="text-gray-300 font-light text-lg">
//               Senior Web Developer | Enterprise Solutions Architect | Innovation Engineer
//             </p>
//           </div>
//           <div className="w-32 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8"></div>
//           <p className="text-gray-500 font-light">
//             © 2025 Jasem Mohammed. Meticulously crafted with React & Tailwind CSS
//           </p>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes luxury-spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes luxury-spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
//         @keyframes luxury-gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(1deg); }
//           66% { transform: translateY(5px) rotate(-1deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(15px) rotate(-1deg); }
//           66% { transform: translateY(-8px) rotate(1deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(2deg); }
//         }
//         @keyframes twinkle {
//           0%, 100% { opacity: 0; transform: scale(0); }
//           50% { opacity: 1; transform: scale(1); }
//         }
//         @keyframes pulse-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
//           50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6); }
//         }
//         .animate-luxury-spin {
//           animation: luxury-spin 8s linear infinite;
//         }
//         .animate-luxury-spin-reverse {
//           animation: luxury-spin-reverse 6s linear infinite;
//         }
//         .animate-luxury-gradient {
//           background-size: 200% 200%;
//           animation: luxury-gradient 4s ease infinite;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 10s ease-in-out infinite;
//         }
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//         .text-shadow-luxury {
//           text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;




import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink, Award, Download } from 'lucide-react';

const ProfessionalCV = () => {
  const contactInfo = {
    name: "Jasem Mohammed",
    title: "Senior Web Developer",
    email: "jasem2000704@gmail.com",
    phone: "+964 XXX XXX XXXX", // Add your phone number
    location: "Baghdad, Iraq",
    github: "github.com/j10mo",
    linkedin: "linkedin.com/in/jasem-mohammed", // Add your LinkedIn
  };

  const summary = "Experienced Senior Web Developer with 4+ years of expertise in building scalable enterprise applications. Specialized in full-stack development with a strong focus on healthcare systems, e-commerce platforms, and business automation solutions. Proven track record of delivering high-quality software solutions that drive business value and improve user experience.";

  const experience = [
    {
      title: "Senior Web Developer",
      company: "Freelance",
      location: "Baghdad, Iraq",
      period: "2021 - Present",
      responsibilities: [
        "Developed and deployed 50+ enterprise-level web applications for clients across healthcare, e-commerce, and service industries",
        "Led full-stack development projects from concept to deployment, ensuring scalability and performance optimization",
        "Implemented secure authentication systems and payment processing integrations for multiple e-commerce platforms",
        "Collaborated with international clients to deliver custom solutions meeting specific business requirements",
        "Mentored junior developers and conducted code reviews to maintain high code quality standards"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "AON Academy Graduate Program",
      location: "Baghdad, Iraq",
      period: "2022",
      responsibilities: [
        "Completed intensive full-stack web development program with focus on modern frameworks and best practices",
        "Built multiple real-world projects using React, Node.js, and various database technologies",
        "Collaborated with team members on group projects using Agile methodologies"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Baghdad",
      location: "Baghdad, Iraq",
      period: "2018 - 2022",
      details: "Graduated with comprehensive knowledge in software engineering, algorithms, and computer systems"
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "AON Academy",
      location: "Baghdad, Iraq",
      period: "2022",
      details: "Intensive program covering React, Node.js, MongoDB, and modern web development practices"
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "Python"],
    "Frontend": ["React", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "Redux", "Next.js"],
    "Backend": ["Node.js", "Express.js", "Laravel", "Django", "Spring Boot", "RESTful APIs", "GraphQL"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Nginx"],
    "Other Skills": ["Agile/Scrum", "Microservices", "JWT Authentication", "Payment Integration", "WebSockets"]
  };

  const projects = [
    {
      name: "Panta Security System",
      description: "Enterprise security management platform with real-time monitoring and access control",
      technologies: "React, Node.js, PostgreSQL, WebSocket, JWT",
      link: "github.com/j10mo/panta-garud"
    },
    {
      name: "Doctor Appointment System",
      description: "Healthcare platform with appointment scheduling, patient records, and telemedicine features",
      technologies: "Angular, Spring Boot, PostgreSQL, WebRTC",
      link: "github.com/j10mo/doctor-app"
    },
    {
      name: "StyleH Electronics Store",
      description: "E-commerce platform with inventory management and secure payment processing",
      technologies: "React, Express, MongoDB, Stripe, Redis",
      link: "github.com/j10mo/electronics-store"
    },
    {
      name: "Project Management System",
      description: "Team collaboration tool with task tracking and performance analytics",
      technologies: "Vue.js, Laravel, MySQL, Socket.io, Chart.js",
      link: "github.com/j10mo/project-manager"
    }
  ];

  const certifications = [
    "Full Stack Web Development - AON Academy (2022)",
    "Advanced JavaScript - Udemy (2023)",
    "Project Management Fundamentals - Earthlink (2024)",
    "AWS Cloud Practitioner - In Progress"
  ];

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Professional Working Proficiency" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-before: always;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      {/* Download Button */}
      <div className="no-print fixed top-4 right-4 z-10">
        <button
          onClick={() => window.print()}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Download size={16} className="mr-2" />
          Download CV
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{contactInfo.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{contactInfo.title}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center">
              <Github size={16} className="mr-2" />
              <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                {contactInfo.github}
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex items-center">
              <Linkedin size={16} className="mr-2" />
              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                {contactInfo.linkedin}
              </a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {summary}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Professional Experience
          </h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-700">{job.company} • {job.location}</p>
                </div>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {job.period}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution} • {edu.location}</p>
                </div>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 ml-4">{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Technical Skills
          </h2>
          <div className="space-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <p className="text-sm font-semibold text-gray-700">{category}:</p>
                </div>
                <div className="col-span-9">
                  <p className="text-sm text-gray-700">{items.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects - Page Break for Print */}
        <section className="mb-8 print-break">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Key Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  {project.name}
                  <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-700">
                    <ExternalLink size={14} />
                  </a>
                </h3>
                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Technologies:</span> {project.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Certifications & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            {certifications.map((cert, index) => (
              <li key={index} className="text-sm">{cert}</li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Languages
          </h2>
          <div className="flex space-x-6">
            {languages.map((lang, index) => (
              <div key={index} className="text-sm">
                <span className="font-semibold text-gray-700">{lang.language}:</span>
                <span className="ml-2 text-gray-600">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            Key Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li className="text-sm">Successfully delivered 50+ web applications with 100% client satisfaction rate</li>
            <li className="text-sm">Achieved 500+ GitHub stars across personal open-source projects</li>
            <li className="text-sm">Reduced application load time by 60% through optimization techniques</li>
            <li className="text-sm">Implemented secure payment systems processing $1M+ in transactions</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>References available upon request</p>
        </footer>
      </div>
    </div>
  );
};

export default ProfessionalCV;