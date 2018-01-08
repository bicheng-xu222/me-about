import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconFace from 'material-ui/svg-icons/action/face';
import IconStars from 'material-ui/svg-icons/action/stars';
import IconExperience from 'material-ui/svg-icons/action/assignment-ind';
import IconProject from 'material-ui/svg-icons/action/extension';
import MySkills from 'material-ui/svg-icons/action/build';
import DisplayWindow from './AboutDisplayWindow';

const faceIcon = <IconFace />;
const skills = <MySkills />
const stars = <IconStars />
const experienceIcon= <IconExperience />
const projectIcon = <IconProject />

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div>
      <DisplayWindow selectedIndex={this.state.selectedIndex} />
      <Paper zDepth={1} style={{position:'fixed', bottom: 0, width: '100%', padding: '2px 0px 0px 0px'}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Intro"
            icon={faceIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Interests"
            icon={stars}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Skills"
            icon={skills}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Experience"
            icon={experienceIcon}
            onClick={() => this.select(3)}
          />
          <BottomNavigationItem
            label="Projects"
            icon={projectIcon}
            onClick={() => this.select(4)}
          />
        </BottomNavigation>
      </Paper>
    </div>
    );
  }
}

export default BottomNavigationExampleSimple;
