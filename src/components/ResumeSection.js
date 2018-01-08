import React, { Component } from 'react';
import ResumeDisplay from './DisplayResume';
import ListExampleSimple from './ResumeSideMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ResumeSection extends Component {

  render() {

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <ListExampleSimple />
        </MuiThemeProvider>
        <ResumeDisplay />
      </div>
    );
  }
}
