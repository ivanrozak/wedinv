import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: props.props.lat, lng: props.props.lng }}
    >
      <Marker position={{ lat: props.props.lat, lng: props.props.lng }} />
      {console.log(props, JSON.stringify(props.props.lat), 'lat')}
    </GoogleMap>
  ))
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -6.2064838,
      lng: 106.8786706,
    },
    zoom: 20,
  };
  // -6.2064838,106.8786706

  render() {
    return (
      <div className='container  py-2'>
        <div style={{ height: '300px', width: '100%' }}>
          <MapWithAMarker
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAUdx_YdrwbdjQtCLnqK9U2SyIFj5IrgdM&v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            props={this.props.center}
          />
        </div>
        {/* <a href='https://goo.gl/maps/omFhPoeBtc5Fj6H6A'>
          <button>Clicked</button>
        </a> */}
      </div>
    );
  }
}

export default Map;
