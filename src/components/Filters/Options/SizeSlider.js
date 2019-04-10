import React from 'react';
import { connect } from 'react-redux';
import Slider from '@material-ui/lab/Slider';
import { SizeFilter } from '../../../actions';

const styles = {
  root: {
    width: 300,
    marginBottom: '30px'
  },
  slider: {
    padding: '22px 0px',
  },
};

class SizeSlider extends React.Component {
  state = {
    value: 100,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(SizeFilter(value))
  };

  render() {
    console.log(Math.floor(this.props.size * 3))
    return (
      <div style={styles.root}>
        <Slider
          style={styleMedia.slider}
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
