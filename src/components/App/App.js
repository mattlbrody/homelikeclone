import './App.css';
import React, { Component } from 'react';
import ApartmentList from '../ApartmentList/ApartmentList';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import MobileFilters from '../Filters/MobileFilters';
import ApartmentCountTitle from '../ApartmentCountTitle/ApartmentCountTitle';
import Sorting from '../Sorting/Sorting';
import Map from '../Map/Map';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss} from '@fortawesome/free-solid-svg-icons';

library.add(faRss)

class App extends Component {
  render() {
    return (
      <div className="container">
        <Grid container spacing={24}>
          <Grid style={{paddingRight: '0'}} item md={8} sm={6} xs={12}>
            <div className="apartmentsearch">
              <Header />
              <Hidden smDown>
                <Filters />
              </Hidden>
              <Hidden mdUp>
                <MobileFilters />
              </Hidden>
              <ApartmentCountTitle />
              <Sorting />
              <ApartmentList />
              <div className="searchagent">
                <FontAwesomeIcon icon="rss" className="rss" />
                Search Agent
              </div>
            </div>
          </Grid>
          <Grid style={{paddingLeft: '0'}}  item md={4} sm={6} xs={false}> 
            <Hidden xsDown>
              <div className="map"> 
                <Map />
              </div>
            </Hidden>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <img src="http://codifyacademy.com/intercom.png" alt="intercom" className="intercom" />
        </Hidden>
      </div>
    )
  }
}

export default App;