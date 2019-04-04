import './ApartmentList.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Grid from '@material-ui/core/Grid';

class PostList extends Component {
  state = {
    apts: []
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.apts.map(apartment => {
      return (
        <Grid key={apartment._id} item lg={4} md={6} xs={12}> 
          <div> 
            <img style={{objectFit: 'cover'}} src={apartment.images.photos[0].path} alt="" width='100%' height="150px"/>
            <div className="containeraps">
              <div className='aptprice'>£{apartment.pricing.price}</div>
              <div className="monthutil">
                <div>Per Month</div>
                <div>Utilities incl.</div>
              </div>
            </div>
            <div className="movein">
              from 29.24.2019 - {parseInt(apartment.details.squareMeters)} m² - {apartment.bedroomCount} bedroom
            </div>
          </div>
        </Grid>
      )
    })
  }

  render() {
    console.log(this.props.apts);
    return (
      <div className='aptlist'>
        <Grid container spacing={24}>
          {this.renderList()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { apts: state.PostsReducer }
}

export default connect(mapStateToProps,
  {fetchPosts}
)(PostList);