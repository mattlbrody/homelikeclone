import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faPlusCircle, faMinusCircle)

class Bedrooms extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //action to handle incrementing
  increment = () => {
    this.props.dispatch({ type: 'BEDROOM_INCREMENT' });
  }
  //action to handle decrementing
  decrement = () => {
    if(this.props.count > 0 ) {
      this.props.dispatch({ type: 'BEDROOM_DECREMENT' });
    }
  }

  //action to handle reseting the filter
  filterReset = () => {
  this.props.dispatch({ type: 'BEDROOM_RESET' });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="seperatordiv bedrooms">
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
          Bedrooms
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
                        <span className="guestprice">Bedrooms</span>
                        <br />
                        <Button onClick={this.decrement} className="minusButton" disableTouchRipple>
                        <FontAwesomeIcon className="minus" icon="minus-circle" />
                        </Button>
                        <span>{this.props.count}</span>
                        <Button onClick={this.increment} className="plusButton" disableTouchRipple>
                        <FontAwesomeIcon className="plus" icon="plus-circle" />
                        </Button>
                        <div className="bottommodal">
                          <Button 
                            disableTouchRipple
                            className="reset"
                            onClick={this.filterReset}
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

const mapStateToProps = (state) => {
  return { count: state.BedroomReducer.count }
}

export default connect(mapStateToProps)(Bedrooms);