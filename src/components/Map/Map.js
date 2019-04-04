import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
    return (
      <Map 
        style={{margin: '0', overflow: 'hidden'}} 
        google={this.props.google} 
        zoom={13}
        initialCenter={{
            lat: 51.5073509,
            lng: -0.04
          }}
      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>London</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyB-L-IikkM6BZ_3Z2QIzbkx4pdAkP76tok')
})(GoogleMap)