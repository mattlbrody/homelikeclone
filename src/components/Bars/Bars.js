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

const styles = {
    modal: {
      width: '200px',
      zIndex: '999'
    },
    menuItem: {
      display: 'flex', 
      justifyContent: 'flex-end',
      fontSize: '13px',
      color:' rgb(76, 91, 92)'
    }
  }

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

  render() {
    const { open } = this.state;

    return (
      <div>
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
        <Popper style={styles.modal} placement="bottom-end" open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper style={{marginTop: '30px'}} square>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem style={styles.menuItem} onClick={this.handleClose}>Login</MenuItem>
                    <MenuItem style={styles.menuItem} onClick={this.handleClose}>Register</MenuItem>
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