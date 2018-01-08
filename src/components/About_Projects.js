import React from 'react';
import { Link } from "react-router";
import './About_Projects.css';

const ProjectsSection = () => (
  <section id="portfolio-section" className="section">
     <div className="section-wrapper">
        <div className="fade-in">
           <h1 className="section-heading">Projects</h1>
           <span className="divider"></span>
             <div className="portfolio-row">
                <div className="screenshots">
                   <img className="img-lg" src="https://uxxSam.github.io/img/portfolio/ebayAnalyzer/ebayAnalyzer.jpg" alt="desktop-screenshot" />
                </div>
                <div className="description-title-container">
                   <h2 className="description-title">eBay Market Analyzer</h2>
                   <div className="description-buttons">
                      <a href="http://ebay-ana.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                      <a href="https://github.com/uxxSam/react-eBay-market-analyzer" target="_blank" rel="noopener noreferrer">Code</a>
                   </div>
                </div>
                <p className="portfolio-description">On eBay, the price of items, especially used items, can vary significantly from time to time. I developed this web application using React.js, Chart.js and eBay's API to help buyers and sellers to price their items properly, to decide whether it is the right time to buy/sell their items and to get more business insights from the eBay market. The backend server is developed using Flask and deployed using AWS. <strong>Currently I am also developing the React Native version of this project.</strong></p>
                <div className="used">
                   <ul className="used-items">
                      <li className="used-item">JavaScript</li>
                      <li className="used-item">React.js</li>
                      <li className="used-item">HTML / CSS</li>
                      <li className="used-item">React Native</li>
                      <li className="used-item">Flask</li>
                      <li className="used-item">uWSGI</li>
                      <li className="used-item">Memcached</li>
                      <li className="used-item">AWS</li>
                   </ul>
                </div>
             </div>
             <span className="divider"></span>
           <div className="portfolio-item-wrapper">
              <div className="portfolio-row">
                 <div className="screenshots">
                    <img className="img-lg" src="https://uxxSam.github.io/img/portfolio/teammates/teammates.jpg" alt="desktop-screenshot" />
                 </div>
                 <div className="description-title-container">
                    <h2 className="description-title">TEAMMATES</h2>
                    <div className="description-buttons">
                       <a href="https://teammatesv4.appspot.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                       <a href="https://github.com/TEAMMATES/teammates" target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                 </div>
                 <p className="portfolio-description">I am a contributor of TEAMMATES, a free online tool for managing peer evaluations and other feedback paths of your students. It is provided as a cloud-based service for educators/students and is currently used by hundreds of universities across the world.</p>
                 <div className="used">
                    <ul className="used-items">
                       <li className="used-item">Java</li>
                       <li className="used-item">J2EE</li>
                       <li className="used-item">JavaScript</li>
                       <li className="used-item">Bootstrap</li>
                    </ul>
                 </div>
              </div>
              <span className="divider"></span>
              <div className="portfolio-row">
                 <div className="screenshots">
                    <img className="img-lg" src="https://uxxSam.github.io/img/portfolio/shutter-up/shutter-up.jpg" alt="desktop-screenshot" />
                 </div>
                 <div className="description-title-container">
                    <h2 className="description-title">Shutter-up Photography Website</h2>
                    <div className="description-buttons">
                       <Link to="/photo">Demo</Link>
                    </div>
                 </div>
                 <p className="portfolio-description">As a photographer and a vintage camera enthusiast, I am not satisfied with the photo portfolios provided by a few image hosting websites. Therefore, I engineered my own gallery web application using React, Redux and React Router so that I have the control to customize anything on my portfolio.</p>
                 <div className="used">
                    <ul className="used-items">
                       <li className="used-item">JavaScript</li>
                       <li className="used-item">React.js</li>
                       <li className="used-item">Node.js</li>
                       <li className="used-item">MongoDB</li>
                       <li className="used-item">Sass</li>
                    </ul>
                 </div>
              </div>
              <span className="divider"></span>
           </div>
        </div>
     </div>
  </section>
);

export default ProjectsSection;
