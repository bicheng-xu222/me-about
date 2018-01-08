import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router"
import PopoverExampleSimple from "./HeaderProjectDropDown"
import { browserHistory } from 'react-router'

const style = {
  margin: 15,
};


export default class FlatButtonExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 2500,
      message: 'Loaded Selected Section',
      open: false,
    };
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleActionClick = () => {
    this.setState({
      open: false,
    });
    browserHistory.goBack();
  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value, 10) : 0,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
  return (
  <div>
    <Link
      to="/about"
      activeClassName="active-link">
      <RaisedButton label="About" style={style} />
    </Link>
    <Link
      to="/photo"
      activeClassName="active-link">
      <RaisedButton onClick={this.handleClick} label="Photography" style={style} />
    </Link>
    <PopoverExampleSimple />
    <a href="https://uxxsam.github.io/resume.pdf" target="_blank" rel="noopener noreferrer">
        <RaisedButton label="Resume" primary={true} style={style} />
    </a>
      <Snackbar
        open={this.state.open}
        message={this.state.message}
        action="undo"
        autoHideDuration={this.state.autoHideDuration}
        onActionClick={this.handleActionClick}
        onRequestClose={this.handleRequestClose}
      />
  </div>
);
}
}
