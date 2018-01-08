import React, { Component } from 'react';
import IntroSection from './About_Intro';
import InterestSection from './About_Interest';
import SkillsSection from './About_Skills';
import TimelineSection from './About_Timeline';
import ProjectsSection from './About_Projects';

export default class DisplayWindow extends Component {

  render() {
    if (this.props.selectedIndex === 0) {
      return( <IntroSection /> );
    } else if (this.props.selectedIndex === 1) {
      return( <InterestSection /> );
    } else if (this.props.selectedIndex === 2) {
      return( <SkillsSection /> );
    } else if (this.props.selectedIndex === 3) {
      return( <TimelineSection /> );
    } else if (this.props.selectedIndex === 4) {
      return( <ProjectsSection /> );
    } else return (
      <div>
      </div>
    )
    };
}
