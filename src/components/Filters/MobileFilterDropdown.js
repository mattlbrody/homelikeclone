import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import SortSelection from '../Sorting/SortSelection';
import Slide from '@material-ui/core/Slide';import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

library.add(faFilter)

const styles = {
  filtercontainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '15px',
    marginBottom: '15px'
  },
  openfilters: {
    border: '1px solid rgb(76, 91, 92)',
    borderRadius: '2px',
    color: 'rgb(76, 91, 92)',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    textTransform: 'capitalize',
    fontWeight: '100',
    padding: '5px 10px'
  },
  mobilefilternav: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  handlefilter: {
    backgroundColor: '#6699CC',
    color: 'white',
    borderRadius: '2px',
    textTransform: 'capitalize',
    fontWeight: 400,
    fontFamily: 'Roboto, sans-serif',
    padding: '5px 10px'
  },
  filtericonopen: {
    paddingRight: '7px',
    fontSize: '10px',
  },
  filtericon: {
    paddingRight: '7px',
    fontSize: '10px'
  },
  filterback: {
    textTransform: 'capitalize',
    color: 'rgb(102, 153, 204)',
    backgroundColor: 'transparent',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
  },
  mobilenavcontent: {
    display: 'flex',
    justifyContent: 'center'
  }
};

function Transition(props) {
  return <Slide direction="down" {...props} timeout={{enter: 400, exit: 400}} />;
}

class MobileFilterDropdown extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={styles.filtercontainer}>
        <Button style={styles.openfilters} onClick={this.handleClickOpen}>
          <FontAwesomeIcon style={styles.filtericonopen} icon="filter" />
          Filter
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <Toolbar style={styles.mobilefilternav}>
            <Button style={styles.filterback} onClick={this.handleClose}>
              Back
            </Button>
            <Button style={styles.handlefilter} onClick={this.handleClose}>
            <FontAwesomeIcon style={styles.filtericon} icon="filter" />
              Filter
            </Button>
          </Toolbar>
          <div style={styles.mobilenavcontent}>
            <SortSelection />
          </div>
        </Dialog>
      </div>
    );
  }
}


export default (MobileFilterDropdown);
