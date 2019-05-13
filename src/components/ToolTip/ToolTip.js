import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

function arrowGenerator(color) {
  return {
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
  };
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: 'rgb(76, 91, 92);',
    fontWeight: 100
  },
  arrowPopper: arrowGenerator(theme.palette.grey[700]),
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  tooltip: {
    fontSize: 14,
    borderRadius: 0,
    padding: 11
  }
});

class ToolTip extends React.Component {
  state = {
    arrowRef: null,
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Tooltip
          placement="top"
          title={
            <React.Fragment>
              The number of apartments shown depends on the filter settings and the map section. Change the filters or enlarge the map section.
              <span className={classes.arrow} ref={this.handleArrowRef} />
            </React.Fragment>
          }
          classes={{ popper: classes.arrowPopper, tooltip: classes.tooltip }}
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef,
                },
              },
            },
          }}
        >
          <Button 
            className={classes.button}
            style={{backgroundColor: 'transparent'}}
            disableTouchRipple
          >
            ?
          </Button>
        </Tooltip>
      </div>
    );
  }
}

ToolTip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolTip);