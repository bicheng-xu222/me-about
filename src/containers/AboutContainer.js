import React, { Component } from "react"
import {grey700, blue500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigationExampleSimple from '../components/AboutBottomNavBar';
import "../_site/css/main.css"

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey700,
    primary1Color: blue500,
  },
});

export default class Test extends Component {
  render(){
    return(
    <MuiThemeProvider muiTheme={muiTheme}>
      <BottomNavigationExampleSimple />
    </MuiThemeProvider>
  )
  }
}
