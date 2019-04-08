import './ApartmentList.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Grid from '@material-ui/core/Grid';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  formatPricing(price) {
    if(this.props.apts[0].pricing.currency === 'EUR') {
      return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €`;
    } else {
      return `£${price}`
    }
  }

  renderList() {
    // bedroom filter
    const apartments = this.props.apts.filter(apt => apt.bedroomCount >= this.props.bedrooms.count)
    // price filter
    const apartmentsprice = apartments.filter(apt => apt.pricing.price <= this.props.price * 100 )
    // size filter
    const apartmentssize = apartmentsprice.filter(apt => apt.details.squareMeters <= Math.floor(this.props.size * 3))
    // guest filter
    const apartmentsguests = apartmentssize.filter(apt => apt.details.allowedGuests.persons >= this.props.guests.count)
    
    return apartmentsguests.map(apartment => {
      return (
        <Grid key={apartment._id} item lg={4} md={6} xs={12}> 
          <div> 
            <img style={{objectFit: 'cover'}} src={apartment.images.photos[0].path} alt="" width='100%' height="150px"/>
            <div className="containeraps">
              <div className='aptprice'>{this.formatPricing(apartment.pricing.price)}</div>
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
  return { 
    apts: state.ApartmentListReducer, 
    bedrooms: state.BedroomReducer, 
    price: state.PriceReducer.price,
    size: state.SizeReducer.size,
    guests: state.GuestReducer
  }
}

export default connect(mapStateToProps,
  {fetchPosts}
)(PostList);