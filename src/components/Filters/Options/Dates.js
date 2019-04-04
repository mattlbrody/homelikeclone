import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import DatePickerUI from './DatePicker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown)

const styles = {
    modal: {
      width: '400px',
      zIndex: 99
    },
    Applybutton: {
      backgroundColor: '#6699CB',
      color:'white',
      fontWeight: 100,
      marginLeft: 10,
      textTransform: 'capitalize'
    },
    button: {
      backgroundColor: 'transparent', 
      color:' rgb(76, 91, 92)',
      fontWeight: 300,
      fontSize: '13px',
      paddingLeft: '0',
      paddingRight: '0',
      textTransform: 'capitalize',
      justifyContent: 'space-between'
    },
    reset: {
      backgroundColor: 'transparent',
      fontSize:'14px',
      fontWeight: 100,
      color: 'tomato',
      textTransform: 'capitalize'
    },
    cancel: {
      backgroundColor: 'transparent',
      fontSize:'14px',
      fontWeight: 100,
      color: '#6699CB',
      textTransform: 'capitalize'
    }
  }

class Dates extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="seperatordiv">
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          style={styles.button}
          disableTouchRipple
        >
          Date
          <FontAwesomeIcon className="chevron" icon="chevron-down" />
        </Button>
        <Popper style={styles.modal} placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper square className="pricepaper">
                <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                {open ? (
                  <div>
                  <DatePickerUI />
                  <div className="bottommodal">
                    <Button 
                      disableTouchRipple
                      style={styles.reset}
                    >
                      Reset Filter
                    </Button>
                    <div className="right">
                    <Button 
                      disableTouchRipple
                      style={styles.cancel}
                      onClick={this.handleClose}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="applyprice"
                      disableTouchRipple
                      style={styles.Applybutton}
                      onClick={this.handleClose}
                    >
                      Apply
                    </Button>
                    </div>
                  </div>
                  </div>
                ) : null}
                </ClickAwayListener>
                </div>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default (Dates);