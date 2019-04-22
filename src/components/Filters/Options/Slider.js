import React from 'react';
import { connect } from 'react-redux';
import Slider from '@material-ui/lab/Slider';
import { PriceFilter } from '../../../actions';

class PriceSlider extends React.Component {
  state = {
    value: 100,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(PriceFilter(value))
  };

  render() {
    return (
      <div className="sliderdiv">
        <Slider
          className="slider"
          value={this.props.price}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { price: state.PriceReducer.price }
}

export default connect(mapStateToProps)(PriceSlider);
