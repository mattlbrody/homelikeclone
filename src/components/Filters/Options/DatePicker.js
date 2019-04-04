import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

const styles = {
  grid: {
    width: '100%',
  },
};

class DatePickerUI extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDateFirst: new Date('2014-08-18T21:11:54'),
    selectedDateSecond: new Date('2014-08-18T21:11:54')
  };

  handleDateChange = date => {
    this.setState({ selectedDateFirst: date, selectedDateSecond: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDateFirst } = this.state.selectedDateFirst;
    const { selectedDateSecond } = this.state.selectedDateSecond;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label="Check-In"
            value={selectedDateFirst}
            onChange={this.handleDateChange}
          />
          <DatePicker
            margin="normal"
            label="Check-Out"
            value={selectedDateSecond}
            onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

DatePickerUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickerUI);