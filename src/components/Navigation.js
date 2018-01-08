import React from "react"
import { Link } from "react-router"
import HeaderButton from "./HeaderButton"
import "./Navigation.css"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Navigation = props => {
  const styles = {
    color: "white"
  }

  return (
    <header id="header">
      <div id="logo">
        <Link
          className="logo logo-text"
          to="/about"
          style={props.url === "/" ? styles : null}>
          <div className="headerName">Bicheng's Portfolio <b>{'\u00A0'}By{'\u00A0'}React.js</b></div>
        </Link>
      </div>

      <div id="topNav">
        <ul className="cf">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <HeaderButton />
          </MuiThemeProvider>
        </ul>
      </div>
    </header>
  )
}

export default Navigation
