import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: 20,
    width: 100,
    backgroundColor: 'rgb(250, 250, 250)'
  },
});

class Language extends React.Component {
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
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
          style={{color: 'rgb(76, 91, 92)'}}
        >
          English
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
            <img height="9px" src="http://codifyacademy.com/germanflag.svg" alt="german" />
            Deutsch
          </Typography>
           <br />
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" src="http://codifyacademy.com/spainflag.svg" alt="spain" />
            Español
          </Typography>
           <br />
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" src="http://codifyacademy.com/nederlandsflag.svg" alt="netherlands" />
            Nederlands
          </Typography>
           <br />
          <Typography style={{color: 'rgb(76, 91, 92)'}}>
            <img height="9px" src="http://codifyacademy.com/franceflag.svg" alt="francd" />
            Français
          </Typography>
        </Popover>
      </div>
    );
  }
}

Language.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Language);