import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class SortSelection extends React.Component {

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="sortselection">
        <span className="services">Sorting</span>
        <hr />
        <FormControl component="fieldset">
          <RadioGroup
            onChange={this.handleChange}
          >
            <FormControlLabel value="Recommendations" control={<Radio color="primary" />} label="Homelike Recommendation" />
            <FormControlLabel value="Lowestprice" control={<Radio color="primary"/>} label="Lowest price first" />
            <FormControlLabel value="Availability" control={<Radio color="primary"/>} label="Availability" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default SortSelection;