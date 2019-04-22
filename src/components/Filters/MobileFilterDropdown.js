import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import SortSelection from '../Sorting/SortSelection';
import Slide from '@material-ui/core/Slide';import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

library.add(faFilter)

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
      <div className="mobilefilter">
        <Button className="openfilters" onClick={this.handleClickOpen}>
          <FontAwesomeIcon className="filtericonopen" icon="filter" />
          Filter
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          className="mobilefilterdialog"
        >
          <Toolbar className="mobilefilternav">
            <Button className="filterback" onClick={this.handleClose}>
              Back
            </Button>
            <Button className="handlefilter" onClick={this.handleClose}>
            <FontAwesomeIcon className="filtericon" icon="filter" />
              Filter
            </Button>
          </Toolbar>
          <div className="mobilenavcontent">
            <SortSelection />
          </div>
        </Dialog>
      </div>
    );
  }
}


export default (MobileFilterDropdown);
