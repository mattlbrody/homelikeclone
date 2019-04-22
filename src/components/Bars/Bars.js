import './Bars.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faBars)

class Bars extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleClick = () => {
    alert("Wanted to keep this simple-ish, so I didn't include authentication")
  }


  render() {
    const { open } = this.state;

    return (
      <div className="bars">
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          style={{backgroundColor: 'transparent'}}
          disableTouchRipple
        >
          <FontAwesomeIcon icon="bars" />
        </Button>
        <Popper className="modal" placement="bottom-end" open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className="paper" square>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem className="menuItem" onClick={this.handleClick}>Login</MenuItem>
                    <MenuItem className="menuItem" onClick={this.handleClick}>Register</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default (Bars);