import React from 'react';
import { connect } from 'react-redux';
import Slider from '@material-ui/lab/Slider';
import { SizeFilter } from '../../../actions';

class SizeSlider extends React.Component {
  state = {
    value: 100,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(SizeFilter(value))
  };

  render() {
    return (
      <div className="sliderdiv">
        <Slider
          className="slider"
          value={this.state.value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { size: state.SizeReducer.size }
}

export default connect(mapStateToProps)(SizeSlider);
