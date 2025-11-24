// App.js - Final galaxy-themed portfolio
import React, { useState, useRef, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import ParticlesBackground from './ParticlesBackground';
import LoadingScreen from './LoadingScreen';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

const MainContent = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1725asu', 'template_3hdk5df', form.current, 'SM-TNcHb5sGmqk-wP')
      .then(() => alert('Message sent! Thanks for reaching out.'))
      .catch(() => alert('Oops, try again later.'));
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="app">
      <Helmet>
        <title>YAAR Portfolio - Vinayak Tiwari</title>
        <meta name="description" content="Vinayak Tiwari's portfolio - Full Stack Developer • Creative Builder" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <ParticlesBackground />
      <div className="mouse-glow"></div>
      
      <motion.div className="fixed-logo" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <div className="logo">YAAR</div>
        <div className="name">
          <h2>Vinayak Tiwari</h2>
          <p>Developer • Maker</p>
        </div>
      </motion.div>

      <motion.button className="theme-toggle" onClick={() => setIsDark(!isDark)} whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
        {isDark ? '☀️' : '🌌'}
      </motion.button>

      <motion.nav className="nav-bar" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <a href="#hero" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </motion.nav>

      <div className="sections">
        <motion.section id="hero" className="hero" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
         <div className="hero-content">
          <div className="hero-top">
         <img src="https://img.freepik.com/premium-vector/participant-coding-workshop-white-background_886588-17396.jpg?semt=ais_hybrid&w=740" alt="Programmer Vector" className="big-programmer-img" />
          <p className="hero-quote">"judge the book<br />by it cover"</p>
         </div>
         <h1 className="typewriter">Hey I'm <span className="gradient-text">Vinayak Tiwari</span></h1>
          <p>Full Stack Developer | AI App Creator</p>
          <p>I build smart apps that make life easier. Working on YAAR.</p>
         </div>
        </motion.section>

        <motion.section id="about" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <h2 className="neon-glow">About Me</h2>
          <p>BCA student from Hyderabad. Love apps that talk and feel human.</p>
          <p>Coding, automation, AI projects. Play volleyball, chess.</p>
          <p>Goal: Launch YAAR Technologies.</p>
          <p>Education: BCA (2023–2026), 12th/10th at Bright Scholars.</p>
        </motion.section>

        <motion.section id="skills" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <h2 className="neon-glow">Skills</h2>
          <div className="skills-grid">
            <motion.div className="skill-card" whileHover={{ scale: 1.05, rotate: 2 }}>
              <p>React.js • Node.js • Tailwind • JavaScript</p>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.05, rotate: 2 }}>
              <p>Firebase • Express.js • Google STT • Edge-TTS</p>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.05, rotate: 2 }}>
              <p>AI APIs • Android Studio • Termux • API Integration</p>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.05, rotate: 2 }}>
              <p>Git • VS Code • Figma • Canva • Postman</p>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.05, rotate: 2 }}>
              <p>Next.js • TypeScript • Cloud Deployment</p>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.05, rotate: 2 }}>
              <p>HTML • CSS • MongoDB • OpenRouter AI</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
          <h2 className="neon-glow">Projects</h2>
          <div className="projects-grid">
            <motion.div className="project-card" whileHover={{ scale: 1.05, rotate: 1 }}>
              <img src="https://via.placeholder.com/300x200?text=YAAR" alt="YAAR Project" loading="lazy" />
              <h3>🧠 YAAR – AI Voice Chat</h3>
              <p>AI assistant with voice/text. Mood-aware, multilingual.</p>
              <a href="https://your-render-link.com" className="btn neon-btn">Live Demo</a>
              <a href="https://github.com/vinayaktiwari18/yaar" className="btn neon-btn">Code</a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05, rotate: 1 }}>
              <img src="https://via.placeholder.com/300x200?text=Calculator" alt="Calculator Project" loading="lazy" />
              <h3>🧮 Stylesense-AI</h3>
              <p>AI-powered body type and skin tone analysis web app</p>
              <a href="https://stylesense-ai.onrender.com" className="btn neon-btn">Live Demo</a>
              <a href="https://github.com/vinayaktiwari18/stylesense-ai" className="btn neon-btn">Code</a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05, rotate: 1 }}>
              <img src="https://via.placeholder.com/300x200?text=Portfolio" alt="Portfolio Project" loading="lazy" />
              <h3>💻 Portfolio Website</h3>
              <p>My site with React and Tailwind.</p>
              <a href="https://vinayak-portfolio-payg.onrender.com/" className="btn neon-btn">Live Demo</a>
              <a href="https://github.com/vinayaktiwari18/vinayak-portfolio" className="btn neon-btn">Code</a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section id="contact" className="section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>
          <h2 className="neon-glow">Contact</h2>
          <p>📧 vinayakt9639@gmail.com</p>
          <p>📍 Ameerpet, Hyderabad</p>
          <div className="social-links">
            <a href="https://instagram.com/vinayak108_" className="social-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/vinayaktiwari18" className="social-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://linkedin.com/in/vinayak-tiwari1809" className="social-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <footer className="footer">
            <p>“Code what you love. Build what people feel.”</p>
            <p>© 2023 Vinayak Tiwari</p>
            <a href="/resume.pdf" download className="btn neon-btn">Download Resume</a>
          </footer>
        </motion.section>
      </div>
    </div>
  );
};

export default App;