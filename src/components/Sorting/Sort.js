import React from 'react'
import SortSelection from './SortSelection';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faPlusCircle, faMinusCircle)

class Sort extends React.Component {

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
      <div className="sortfilter">
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
          <div className="sort">
            <div className="sortingtext">Sorting</div>
            <div className="recommendations">Homelike Recommendations</div>
          </div>
        </Button>
        <FontAwesomeIcon className="chevron" icon="chevron-down" />
        <Popper className="modal" placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
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
                  <SortSelection />
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

export default (Sort);