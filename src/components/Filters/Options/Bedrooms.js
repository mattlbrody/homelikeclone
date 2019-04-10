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

const styles = {
    modal: {
      width: '360px',
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
      justifyContent: 'space-between',
      width: '90px'
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
    }, 
    minus: {
      fontSize: '22px',
      marginRight: '30px',
      backgroundColor: 'transparent'
    },
    plus: {
      fontSize: '22px',
      marginLeft: '30px',
      backgroundColor: 'transparent'
    }
  }

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
          Bedrooms
          <FontAwesomeIcon className="chevron" icon="chevron-down" />
        </Button>
          <Popper style={styles.modal} placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
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
                        <Button onClick={this.decrement} style={{backgroundColor: 'transparent'}} disableTouchRipple>
                        <FontAwesomeIcon style={styles.minus} className="minus" icon="minus-circle" />
                        </Button>
                        <span>{this.props.count}</span>
                        <Button onClick={this.increment} style={{backgroundColor: 'transparent'}} disableTouchRipple>
                        <FontAwesomeIcon style={styles.plus} className="plus" icon="plus-circle" />
                        </Button>
                        <div className="bottommodal">
                          <Button 
                            disableTouchRipple
                            style={styles.reset}
                            onClick={this.filterReset}
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