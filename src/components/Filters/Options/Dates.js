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
      <div className="seperatordiv dates">
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className="button"
          disableTouchRipple
        >
          Date
          <FontAwesomeIcon className="chevron" icon="chevron-down" />
        </Button>
          <Popper className="modal" placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Paper square className="pricepaper">
                    <div>
                    {open ? (
                      <div>
                      <DatePickerUI />
                      <div className="bottommodal">
                        <Button 
                          disableTouchRipple
                          className="reset"
                          onClick={this.handleClose}
                        >
                          Reset Filter
                        </Button>
                        <div className="right">
                        <Button 
                          disableTouchRipple
                          className="cancel"
                          onClick={this.handleClose}
                        >
                          Cancel
                        </Button>
                        </div>
                      </div>
                      </div>
                    ) : null}
                    </div>
                  </Paper>
                </ClickAwayListener>
              </Grow>
            )}
          </Popper>
      </div>
    );
  }
}

export default (Dates);