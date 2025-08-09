import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Code, Database, Settings, Zap, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "KCY Accounting",
      description: "Eine umfassende Buchhaltungsanwendung mit moderner Benutzeroberfläche. Bietet Funktionen für Rechnungsverwaltung, Finanzberichterstattung und Kundenmanagement mit intuitiver Bedienung.",
      tech: ["C#", "C++", ".NET"],
      github: "https://github.com/KerYagciHTL/KCY-Accounting",
      icon: "💰"
    },
    {
      title: "Performance Optimizer",
      description: "Ein Tool zur Analyse und Optimierung von Anwendungsperformance mit Echtzeit-Monitoring und detaillierter Berichterstattung.",
      tech: ["C++", "Python", "SQL"],
      github: "#",
      icon: "⚡"
    },
    {
      title: "Data Structure Library",
      description: "Eine hochoptimierte C++ Library mit verschiedenen Datenstrukturen und Algorithmen für bessere Performance in kritischen Anwendungen.",
      tech: ["C++", "CMake", "GTest"],
      github: "#",
      icon: "🔧"
    }
  ];

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programmiersprachen",
      items: ["C#", "C++", "C", "Python", "JavaScript"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Frameworks & Tools",
      items: [".NET 6/7/8", "Visual Studio", "Git", "Docker", "CMake"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Softwareentwicklung",
      items: ["OOP", "Algorithmen & Datenstrukturen", "Performance-Optimierung", "Clean Code"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Datenbanken",
      items: ["SQL", "SQLite", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kerimcan Yagci
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'about' ? 'Über mich' : 
                   section === 'projects' ? 'Projekte' :
                   section === 'skills' ? 'Skills' : 'Kontakt'}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md capitalize"
                >
                  {section === 'about' ? 'Über mich' : 
                   section === 'projects' ? 'Projekte' :
                   section === 'skills' ? 'Skills' : 'Kontakt'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kerimcan Yagci
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Junior Software Developer & Software Engineer
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/KerYagciHTL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="mailto:kerimcanyagci41@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Über mich
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hi! Ich bin Kerim, ein engagierter Softwareentwickler mit Fokus auf C# und modernen Technologien.
                Als Schüler der HTL Leonding entwickle ich effiziente, performante und wartbare Anwendungen.
              </p>
              <p>
                Meine Stärken liegen in der Umsetzung benutzerfreundlicher Desktop-Anwendungen und zuverlässiger
                Backend-Logik. Ich liebe es, komplexe Herausforderungen zu lösen und dabei sauberen, gut
                strukturierten Code zu schreiben.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Clean Code', 'Performance', 'Innovation', 'Teamwork'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-8xl border border-gray-700/50">
                🚀
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Meine Projekte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <button className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologien
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-purple-400">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{skill.title}</h3>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Kontakt
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interessiert an einer Zusammenarbeit? Lass uns reden!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:kerimcanyagci41@gmail.com"
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300" />
              <span className="text-lg font-medium">Email</span>
              <span className="text-gray-400">kerimcanyagci41@gmail.com</span>
            </a>
            <a
              href="https://github.com/KerYagciHTL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <Github className="w-12 h-12 mb-4 text-purple-400 group-hover:text-purple-300" />
              <span className="text-lg font-medium">GitHub</span>
              <span className="text-gray-400">@KerYagciHTL</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Kerimcan Yagci. Alle Rechte vorbehalten.</p>
          <p className="mt-2 text-sm">Entwickelt mit React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;