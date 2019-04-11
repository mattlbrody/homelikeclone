import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapDetails = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={13}
    center={{ lat: props.mapLat, lng: props.mapLng }}
  >
    <Marker
      position={{ lat: props.mapLat, lng: props.mapLng }}
    />
  </GoogleMap>
));

export default MapDetails;