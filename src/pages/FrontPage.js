import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Container } from '../components/Container';

class FrontPage extends Component {

  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1Ijoic25hdHR1IiwiYSI6ImNqNHp6ZzUxejF5bXkzMm9hMGN3bWh1MDEifQ.nS1BQrS7wgQy-WAekxNBYQ"
    });

    return (
      <Map
      style="mapbox://styles/mapbox/outdoors-v9"
      center={[24.949187, 60.184349]}
      onClick={(e, clickEvent) => this.addMarkerToCheckInLocation(clickEvent)}
      zoom={[15]}
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}>
      <Layer
        id="checkins"
        type="symbol"
        layout={{ "icon-image": "marker-15" }}>
      </Layer>
      </Map>
    );
  }
}

export default FrontPage;