import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import SizeSlider from './SizeSlider';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown)

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
      color: 'rgb(76, 91, 92)',
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

class Size extends React.Component {

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
          Size
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
                        <span className="modalprice">Size</span>
                        <h2 className="pricedisplay">0 m² - {Math.floor(this.props.size * 3)} m²</h2>
                        <SizeSlider className="slider" />
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
  return { size: state.SizeReducer.size }
}

export default connect(mapStateToProps)(Size);