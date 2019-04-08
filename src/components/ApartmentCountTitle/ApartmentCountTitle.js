import './ApartmentCountTitle.css';
import React from 'react';
import { connect } from 'react-redux';
import ToolTip from '../ToolTip/ToolTip';

 const ApartmentCountTitle = (props) => {
  return (
    <div className="ApartmentCountTitle containerapttitle">
      <div>{props.totals.totalApartments} of {props.totals.totalCityApartments} Listings In {props.city.locality}</div>
      <div className="tooltip">
        <ToolTip />
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return { totals: state.ApartmentTotalReducer, city: state.CityNameReducer }
}

export default connect(mapStateToProps)(ApartmentCountTitle);