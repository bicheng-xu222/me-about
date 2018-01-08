import React from 'react';
import './About_Timeline.css';

const TimelineSection = () => (
  <section id="experience-section" className="section gap">
    <div className="overlay-wrapper">
      <div className="fade-in">
        <div className="center">
          <h1 className="section-heading">Experience</h1>
          <span className="divider center"></span>
          <p className="experience-description"></p>
        </div>
        <div className="experience-wrapper">
          <div id="timeline">
            <div className="timeline-block">
              <div className="timeline-content">
                <h2 className="position">University of California, San Diego</h2>
                <h3 className="company"><a href="http://jacobsschool.ucsd.edu/" target="_blank" rel="noopener noreferrer">Bachelor of Science Degree in Chemical Engineering</a></h3>
                <p className="job-desc">Although a Chemical Engineer by trainning, I developed strong passion towards Computer Science during my computational research using Python. <strong>I started programming and never looked back.</strong></p>
              </div>
              <div className="timeline-img">
                <div className="sprite university"></div>
              </div>
              <span className="date">2012 - 2016</span>
            </div>
            <div className="timeline-block">
              <div className="timeline-content">
                <h2 className="position">Northeastern University</h2>
                <h3 className="company"><a href="http://www.ccis.northeastern.edu/program/computer-science-ms/" target="_blank" rel="noopener noreferrer">College of Computer and Information Science</a></h3>
                <p className="job-desc">I'm a candidate for Master of Science in Computer Science with a concentration in Software Engineering. <strong>I will be Graduating in May 2019.</strong></p>
              </div>
              <div className="timeline-img">
                <div className="sprite university"></div>
              </div>
              <span className="date">2017 - Present</span>
            </div>
            <div className="timeline-block">
              <div className="timeline-content">
                <h2 className="position">Developer</h2>
                <h3 className="company"><a href="http://www.bichengxu.me/photo" target="_blank" rel="noopener noreferrer">Shutter-up Photography Website</a></h3>
                <p className="job-desc">With my passion for both code and photography, I created the Shutter-up Photography sharing website <strong>using Node.js, React.js and REST APIs.</strong></p>
              </div>
              <div className="timeline-img">
                <div className="sprite industry"></div>
              </div>
              <span className="date">Feb - Apr 2017</span>
            </div>
            <div className="timeline-block">
              <div className="timeline-content">
                <h2 className="position">Contributor</h2>
                <h3 className="company"><a href="https://github.com/TEAMMATES/teammates" target="_blank" rel="noopener noreferrer">TEAMMATES</a></h3>
                <p className="job-desc">Being used by over 1200 universities, TEAMMATES is a free online tool for managing peer evaluations and other feedback paths of students. <strong>I have contributed over 15 patches to this full stack proejct.</strong></p>
              </div>
              <div className="timeline-img">
                <div className="sprite industry"></div>
              </div>
              <span className="date">May 2017 - Present</span>
            </div>
            <div className="timeline-block">
              <div className="timeline-content">
                <h2 className="position">Software Engineer Intern</h2>
                <h3 className="company"><a href="http://www.ebaotech.com/" target="_blank" rel="noopener noreferrer">eBaoTech, Shanghai</a></h3>
                <p className="job-desc">Collaborated with a small team of software engineer interns, I migrated the client data from Excel to MySQL database. In addition, <strong>I Implemented RESTful API service in Node.js with authentication </strong> so that the employees can access and modify the data securely and efficiently.</p>
              </div>
              <div className="timeline-img">
                <div className="sprite industry"></div>
              </div>
              <span className="date">July 2017 - Sept 2017</span>
            </div>
            <div className="timeline-block">
              <div className="timeline-content">
                <h2 className="position">Incoming Software Engineer Intern</h2>
                <h3 className="company"><a href="http://www.paypal.com/" target="_blank" rel="noopener noreferrer">Paypal, San Jose, CA</a></h3>
                <p className="job-desc">I will be joining Paypal as Software Engineer Intern for Summer 2018! </p>
              </div>
              <div className="timeline-img">
                <div className="sprite industry"></div>
              </div>
              <span className="date">May 2018 - Sept 2018</span>
            </div>
          </div>
          <i className="down-arrow"></i>
        </div>
      </div>
    </div>
    <a className="block-btn" href="https://uxxsam.github.io/resume.pdf" target="_blank" rel="noopener noreferrer">
      <span className="text">View My Full Resume</span>
      <img className="icon" src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_account_box_white_24px.svg" alt="resume"/>
    </a>
  </section>
);

export default TimelineSection;
