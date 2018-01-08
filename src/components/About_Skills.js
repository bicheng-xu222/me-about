import React from 'react';
import './About_Skills.css';

const SkillsSection = () => (
  <section id="skills-section" className="section">
    <div className="section-wrapper">
      <div className="fade-in">
        <h1 className="section-heading">Skills</h1>
        <span className="divider"></span>
        <div className="skills-flex-wrapper">
          <div className="flex-item dev-wrapper">
            <h2 className="skills-heading">
              <span className="sprite dev"></span>
              <span>Development</span> </h2>
              <ul>
                <li className="dev-item">Java</li>
                <li className="dev-item">Python</li>
                <li className="dev-item">JavaScript</li>
                <li className="dev-item">SQL/NoSQL</li>
                <li className="dev-item">HTML/CSS</li>
                <li className="dev-item">AWS</li>
                <li className="dev-item">ESLint</li>
                <li className="dev-item">Travis CI</li>
                <li className="dev-item">RESTful API</li>
              </ul>
            </div>
            <div className="flex-item design-wrapper">
              <h2 className="skills-heading">
                <span className="sprite design"></span>
                <span>Frameworks / Libraries</span>
              </h2>
              <ul>
                <li className="design-item">
                  <img className="item-img" src="https://uxxSam.github.io/img/icons/spring.png" alt="rn" />
                </li>
                <li className="design-item">
                  <img className="item-img" src="http://webfullstack.me/images/expressjs.png" alt="express" />
                </li>
                <li className="design-item">
                  <img className="item-img" src="https://uxxSam.github.io/img/icons/django.png" alt="django" />
                </li>
                <li className="design-item">
                  <img className="item-img" src="https://uxxSam.github.io/img/icons/flask.png" alt="flask" />
                </li>
              </ul>
            </div>
            <div className="flex-item check-wrapper">
              <div className="tools-wrapper">
                <h2 className="skills-heading">
                  <span className="sprite tools"></span>
                  <span>Tools</span>
                </h2>
                <ul className="list">
                  <li className="list-item">
                    <img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Git / SourceTree</li>
                    <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Webpack / Gulp</li>
                    <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Linux / Command Line</li>
                    <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Eclipse / IntelliJ IDE</li>
                    <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Chrome DevTools</li>
                  </ul>
                </div>
                <div className="knowledge-wrapper">
                  <h2 className="skills-heading">
                    <span className="sprite knowledge"></span>
                    <span>Knowledge</span></h2>
                    <ul className="list">
                      <li className="list-item">
                        <img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Machine Learning</li>
                        <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Version Control</li>
                        <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Security</li>
                        <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>Metrics</li>
                        <li className="list-item"><img className="item-svg" src="https://uxxSam.github.io/img/icons/checkmark.svg" alt="checkmark"/>SEO</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
);

export default SkillsSection;
