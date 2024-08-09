import React from 'react';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, I'm Arian</h1>
          <p className="py-6">Welcome to my portfolio. I'm a software developer with a passion for creating amazing applications.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6 filter invert"/>
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 filter invert"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
