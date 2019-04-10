import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

library.add(faPhone)

const styles = theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: 'rgb(250, 250, 250)'
  }
});

class Phone extends React.Component {
  state = {
    anchorEl: null,
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="container">
        <FontAwesomeIcon className="fontawesomephone" flip="horizontal" icon="phone" />
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
          style={{color: 'rgb(76, 91, 92)'}}
        >
          Help
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
          style={{marginTop: '30px'}}
        >
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" style={{marginRight: '7px'}} src="http://codifyacademy.com/britain.svg" alt="english" /> 
            +44 208 068 50 07
          </Typography>
           <br />
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" style={{marginRight: '7px'}} src="http://codifyacademy.com/germanflag.svg" alt="german" />
            +49 221 988 611 88
          </Typography>
           <br />
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" style={{marginRight: '7px'}} src="http://codifyacademy.com/swissflag.svg" alt="swiss" />
            +41 435 08 46 66
          </Typography>
           <br />
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" style={{marginRight: '7px'}} src="http://codifyacademy.com/spainflag.svg" alt="spain" />
            +34 932 208 096
          </Typography>
           <br />
        </Popover>
      </div>
    );
  }
}

Phone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phone);