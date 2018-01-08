import React from 'react';
import './About_Interest.css';

const InterestSection = () => (
<section id="services-section" className="section gap">
<div className="overlay-wrapper">
<div className="fade-in">
<h1 className="section-heading">What I Do</h1>
<span className="divider"></span>
<div className="services-wrapper">
  <div className="service-row">
    <div className="service-column">
      <div className="sprite webdev"></div>
      <h2 className="service-heading">Full Stack Development</h2>
      <p className="service-text">Using HTML, CSS, JavaScript and various frontend and backend frameworks, I have a passion for developing secure and reliable web applications while maintaining a modular, reusable and clean code base.</p>
    </div>
    <div className="service-column">
      <div className="sprite ui"></div>
      <h2 className="service-heading">User Interface Design</h2>
      <p className="service-text"><strong><em>"Good design is obvious. Great design is transparent."</em></strong> I strive to design and develop responsive, user-friendly and aesthetically pleasing user interface that works across devices, platforms and broswers, so that the users can focus on the content of the website.</p>
      </div>
    </div>
    <div className="service-row">
      <div className="service-column">
        <div className="sprite xd"></div>
          <h2 className="service-heading">Database Management</h2>
            <p className="service-text">In today's digitalized world with massive amounts of data being gathered every day and stored into a database, knowing how to program with SQL is imperative. Having experience setting up SQL and NoSQL database for many projects, I try my best to refine my skills of creating high-performance and reliable database.</p>
            </div>
            <div className="service-column">
              <div className="sprite wit"></div>
              <h2 className="service-heading">Amazon Web Services</h2>
              <p className="service-text">Amazon Web Services make developing, deploying and managing applications more efficient by offering reliable, scalable, and inexpensive cloud computing services. I have integrated AWS EC2, Elasticache, DynamoDB and S3 into my full-stack projects and am passionate about exploring more about AWS.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>);

export default InterestSection;
