import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  BookHeart,
  FileUser,
  GraduationCap,
  CodeXml,
  Menu,
  X,
  Flashlight,
  FlashlightOff,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "DSA", level: 85 },
    { name: "Python", level: 75 },
    { name: "C/C++", level: 60 },
    { name: "Go", level: 60 },
    { name: "Git", level: 60 },
    { name: "Web Development", level: 55 },
    { name: "PyTorch", level: 50 },
    { name: "Machine Learning", level: 40 },
  ];

  const projects = [
    {
      title: "Windborne Balloon Map",
      description:
        "A full-stack web application built as a part of applications to WindBorne Systems' intern roles for Summer 2025. It displays the locations of WindBorne's global sounding balloons (supplied by their API) and wind speed + direciton data (from Open-Meteo) for each location.",
      technologies: [
        "React.js",
        "Leaflet.js",
        "Python",
        "FastAPI",
        "Uvicorn",
        "Redis",
      ],
      githubUrl:
        "https://github.com/joshuali3110/windborne_application/tree/deploy",
      liveUrl: "https://windborne-balloon-mapping.vercel.app/",
    },
    {
      title: "Predicting Keystrokes with Electromyography Signals",
      description:
        "Trained baseline+LSTM and CNN+LSTM models using PyTorch with CUDA on Meta's emg2qwerty surface EMG dataset to classify keystrokes from muscle activity.",
      technologies: ["Python", "PyTorch", "Cuda"],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: "Let's Hangout",
      description:
        "A full-stack web application built as the final project for UCLA's CS35L, Software Construction. It is an event management platform designed for college students, allowing them to create accounts, make groups, schedule events, and manage RSVPs.",
      technologies: [
        "HTML",
        "React.js",
        "Python",
        "CockroachDB",
        "Vite",
        "Docker",
      ],
      githubUrl: "https://github.com/SPerrott22/lets-hangout",
      liveUrl:
        "https://drive.google.com/file/d/1BSxMrwpGKUn_VdXIERGbzOOupFtLvEA1/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 dark:text-white">
              Joshua Li
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {["home", "skills", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {section}
                </button>
              ))}
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode((d) => !d)}
                className="ml-4 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FlashlightOff size={24} />
                ) : (
                  <Flashlight size={24} />
                )}
              </button>
            </div>

            {/* Mobile menu button and dark mode toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode((d) => !d)}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FlashlightOff size={24} />
                ) : (
                  <Flashlight size={24} />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              {["home", "skills", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 capitalize text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Combined Home Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 pb-0 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Picture and Home Content */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-in mb-8">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg mb-8 max-w-md mx-auto lg:mx-0">
                  <img
                    src="yosemite_headshot.jpg"
                    alt="Joshua Li"
                    className="w-48 h-48 rounded-full mx-auto object-cover scale-110"
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="text-blue-600 dark:text-blue-400">
                    Joshua Li
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                  CS @ UCLA
                </p>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                  Bay Area & Los Angeles
                </p>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="space-y-8 lg:mt-0">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <GraduationCap
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <div className="w-full">
                    {/* Ensure the content spans the full width */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Education
                    </h3>
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600 dark:text-gray-300">
                          Palo Alto High School
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-right w-32">
                          2018-2022
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600 dark:text-gray-300">
                          UCLA: B.S. in Computer Science
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-right w-32">
                          2022-2026
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600 dark:text-gray-300">
                          UCLA: M.S. in Computer Science
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-right w-32">
                          2026-2027
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CodeXml
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      What I'm Up To
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I'm currently exploring various fields and technologies in
                      software development and AI/ML to broaden my horizons and
                      figure out the right direction for my career. As of right
                      now, I'm most interested in machine learning and
                      distributed systems. I'm also interning at a stealth AI
                      startup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookHeart
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Hobbies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Outside of school/work, I enjoy making music, traveling,
                      watching movies, and playing basketball.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Links - moved outside the grid for proper mobile flow */}
          <div className="flex space-x-8 justify-center mt-12 lg:mt-16">
            <a
              href="mailto:joshuali3110@ucla.edu"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Mail size={32} />
            </a>
            <a
              href="https://github.com/joshuali3110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-m-li/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="/Joshua_Li_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <FileUser size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-gray-900 min-h-screen"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  const isDark =
                    document.documentElement.classList.contains("dark");
                  const popup = document.createElement("div");
                  popup.className =
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                  popup.innerHTML = `
                  <div class="${
                    isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                  } rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }">
                    <button class="absolute top-2 right-2 ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-800"
                    } transition" id="close-popup">
                    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" /></svg>
                    </button>
                    ${
                      project.liveUrl
                        ? `<a href="${
                            project.liveUrl
                          }" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-2xl font-bold ${
                            isDark
                              ? "text-blue-400 hover:underline"
                              : "text-blue-700 hover:underline"
                          } mb-4">${
                            project.title
                          }<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"inline ml-1\" width=\"20\" height=\"20\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11M15 3H21V9M10 14L21 3\" /></svg></a>`
                        : `<h3 class=\"text-2xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          } mb-4\">${project.title}</h3>`
                    }
                    <p class="${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } mb-6">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies
                      .map(
                        (tech) =>
                          `<span class=\"px-3 py-1 ${
                            isDark
                              ? "bg-blue-950 text-blue-300"
                              : "bg-blue-100 text-blue-800"
                          } text-sm rounded-full\">${tech}</span>`
                      )
                      .join("")}
                    </div>
                    <div class="flex justify-end space-x-4">
                    ${
                      project.githubUrl
                        ? `<a href="${
                            project.githubUrl
                          }" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" class="${
                            isDark
                              ? "text-blue-400 hover:text-blue-300"
                              : "text-blue-600 hover:text-blue-800"
                          } transition-colors"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-github\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg></a>`
                        : ""
                    }
                    </div>
                  </div>
                  `;

                  // Disable scrolling when popup opens
                  document.body.style.overflow = "hidden";

                  document.body.appendChild(popup);

                  const closeButton = popup.querySelector("#close-popup");
                  const closePopup = () => {
                    document.body.removeChild(popup);
                    // Re-enable scrolling when popup closes
                    document.body.style.overflow = "";
                  };

                  closeButton?.addEventListener("click", closePopup);

                  // Also close popup when clicking outside of it
                  popup.addEventListener("click", (e) => {
                    if (e.target === popup) {
                      closePopup();
                    }
                  });
                }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Joshua Li. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
