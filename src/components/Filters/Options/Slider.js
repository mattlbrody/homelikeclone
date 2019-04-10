import React from 'react';
import { connect } from 'react-redux';
import Slider from '@material-ui/lab/Slider';
import { PriceFilter } from '../../../actions';

const styles = {
  root: {
    width: 300,
    marginBottom: '30px'
  },
  slider: {
    padding: '22px 0px',
  },
};

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
      <div style={styles.root}>
        <Slider
          style={styleMedia.slider}
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
