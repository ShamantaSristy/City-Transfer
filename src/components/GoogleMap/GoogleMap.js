import React, { Component } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '80vh',
};

export class MapContainer extends Component {
  render() {
    return (
      <div style={{marginTop:'5vh'}}>
        <Map google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.00, lng: -122.00 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBZjfEqHE2Ds6Do4Ix_0xbMS1EMrK8jYd8')
})(MapContainer)