import React from 'react'
//import Services from './Services';
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

const styles = {
    modal: {
      width: '360px',
      zIndex: '999'
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
      fontWeight: 300,
      color:' rgb(76, 91, 92)',
      fontSize: '13px',
      paddingLeft: '0',
      textTransform: 'capitalize',
      justifyContent: 'flex-start',
      paddingTop: 0
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
          style={styles.button}
          disableTouchRipple
        >
          <div className="sort">
            <div className="sortingtext">Sorting</div>
            <div style={{color: 'rgb(102, 153, 204)'}}>Homelike Recommendations</div>
          </div>
        </Button>
        <FontAwesomeIcon className="chevron" icon="chevron-down" />
        <Popper style={styles.modal} placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper square className="pricepaper" style={{maxHeight: 500, overflow: 'auto'}}>
                <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                {open ? (
                  <div>
                  <SortSelection />
                  <div className="bottommodal">
                    <Button 
                      disableTouchRipple
                      style={styles.reset}
                      onClick={this.handleClose}
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