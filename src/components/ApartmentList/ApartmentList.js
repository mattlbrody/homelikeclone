import './ApartmentList.css';
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import TemporaryDrawer from '../Drawer';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Grid from '@material-ui/core/Grid';
import Loader from '../Loader'

class PostList extends Component {
  state = {
    right: false,
    mainimage: '',
    imageList: {
      one: '',
      two: '',
      three: '',
      four: '',
      five: ''
    },
    title: '',
    bedroom: 0,
    size: 0,
    guests: 0,
    price: 0,
    currency: 'EUR'
  };

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

  toggleDrawer = (side, open, apartment) => () => {
    this.setState({
      [side]: open,
    });
    if (open === true) {
      this.setState({
        mainimage: apartment.images.photos[0],
        imageList: {
          one: apartment.images.photos[0],
          two: apartment.images.photos[1],
          three: apartment.images.photos[2],
          four: apartment.images.photos[3],
          five: apartment.images.photos[4]
        },
        title: apartment.descriptions.en.title,
        bedroom: apartment.bedroomCount,
        size: apartment.details.squareMeters,
        guests: apartment.details.allowedGuests.persons,
        price: apartment.pricing.price,
        currency: apartment.pricing.currency
      })
    } else {
      this.setState({
        mainimage: '',
        imageList: {
          one: '',
          two: '',
          three: '',
          four: '',
          five: ''
        },
        title: '',
        bedroom: 0,
        size: 0,
        guests: 0,
        price: 0,
        currency: ''
      })
    }
  };

  handleButtonClick() {
    alert("I don't have data to display this :(")
  }

  onRequestClick() {
    alert("I don't have the data for this and the calculations I could do feels like I'm going a bit overboard at this point :)")
  }

  // change the main image in the drawer to the clicked on image in the gallery
  onImageGalleryClick(img) {
    this.setState({ mainimage: img })
  }
  
  renderList() {
    if(this.props.apts !== 'No data available for that city') {
      // bedroom filter
      const apartments = this.props.apts.filter(apt => apt.bedroomCount >= this.props.bedrooms.count)
      // price filter
      const apartmentsprice = apartments.filter(apt => apt.pricing.price <= this.props.price * 100 )
      // size filter
      const apartmentssize = apartmentsprice.filter(apt => apt.details.squareMeters <= Math.floor(this.props.size * 3))
      // guest filter
      const apartmentsguests = apartmentssize.filter(apt => apt.details.allowedGuests.persons >= this.props.guests.count)
      
      if (apartmentsguests.length > 0) {
        return apartmentsguests.map(apartment => {
          return (
            <Grid key={apartment._id} item lg={4} md={6} xs={12}> 
              <div className="drawerButtonVisible" onClick={this.toggleDrawer('right', true, apartment)}> 
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
              <div className="drawerButtonNotVisible"> 
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
      } else if (this.props.apts.length === 0 && apartmentsguests.length === 0) {
        return <Loader className="loader" />
      } else if (this.props.apts.length > 0 && apartmentsguests.length === 0) {
        return (
          <div className="loader">
            <div>No apartments meet your requirements</div>
            <div>try resetting your filters</div>
          </div>
        )
      } 
    } else {
      return (
        <div className="loader">
          <div>No data available for that city</div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='aptlist'>
        <Grid container spacing={24}>
          {this.renderList()}
        </Grid>
        <div className="desktopOnly">
          <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
            <div
              tabIndex={0}
              role="button"
            >
            <TemporaryDrawer 
              imageList={this.state.imageList}
              mainImage={this.state.mainimage}
              aptTitle={this.state.title}
              aptBedrooms={this.state.bedroom}
              aptSize={this.state.size}
              aptGuests={this.state.guests}
              aptPrice={this.state.price}
              aptCurrency={this.state.currency}
            />
            </div>
          </Drawer>
        </div>
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