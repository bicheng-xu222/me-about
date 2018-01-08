import React from 'react';
import { Link } from "react-router";
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div style= {{display: 'inline-block', margin: 15}}>
        <Paper style= {{display: 'inline-block', margin: '0px 0px 12px 0'}}>
          <RaisedButton
            onClick={this.handleClick}
            label="Project Links"
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <a href="http://ebay-ana.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <MenuItem primaryText="eBay Analyzer" />
              </a>
              <Link to="/photo">
                <MenuItem primaryText="Shutter Up" />
              </Link>
              <a href="http://teammatesv4.appspot.com/" target="_blank" rel="noopener noreferrer">
              <MenuItem primaryText="TEAMMATES" />
              </a>
              <a href="https://github.com/uxxSam/DoYouEvenPDP_Backend" target="_blank" rel="noopener noreferrer">
              <MenuItem primaryText="Homely" />
              </a>
            </Menu>
          </Popover>
        </Paper>
      </div>
    );
  }
}
