import React from 'react';
import './About_Intro.css';

const IntroSection = () => (
<section id="about-section" className="section">

  <div className="section-wrapper">
    <div className="fade-in">
      <h1 className="section-heading">Welcome to my world.</h1>
      <h3 className="section-subheading">I'm Bicheng, a self-motivated and ever-curious software engineer passionate about solving problems and helping the society with the technology which gives a lasting impact.</h3>
      <span className="divider"></span>
      <div className="about-wrapper">
        <img className="headshot" src="https://uxxsam.github.io/img/headshot.jpg" alt="headshot" />
        <div className="about-text-wrapper">
          <p className="about-text"><strong>I'm a first year Computer Science Master's student at Northeastern University in Seattle, specializing in Software Engineering.</strong> I have plenty of project experience in full stack development. Using design patterns and best coding practices are what I passionate about at work. I pursue high-quality code that has great modularity, reusability and readability. I also have a <strong>strong eye for UI design and user experience and a great passion for optimizing server performance</strong>. Furthermore, I enjoy solving critical problems using efficient algorithms and data structures.
          </p>
          <p className="about-text"> I believe that only through comprehensive engagement and devotion to coding, debugging, problem-solving and getting involved with various projects, one could become an expert level software engineer. Therefore, to furnish my skills, I have actively seeked for and worked out a few individual and team projects during my free time on Github and during my internship. <strong>I'm aspiring to be a well-rounded Full Stack Software Engineer.</strong>
          </p>
          <p className="about-text"><strong>Aside from being a software engineer,</strong> I'm also a photographer, vintage camera collector, acoustic guitar player and video game enthusiast. These hobbies power both my career and my love for life.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
);

export default IntroSection;
