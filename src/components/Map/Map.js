import React from 'react';
import { connect } from 'react-redux';
import MapDetails from './MapDetails';

class Map extends React.Component {

  renderMap = () => {
    return (
      <MapDetails
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-L-IikkM6BZ_3Z2QIzbkx4pdAkP76tok&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh`}} />}
        mapElement={<div style={{ height: `100%` }} />}
        mapLat={Number(parseFloat(this.props.city.lat))}
        mapLng={Number(parseFloat(this.props.city.lng))}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderMap()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { city: state.CityNameReducer }
}

export default connect(mapStateToProps)(Map);
