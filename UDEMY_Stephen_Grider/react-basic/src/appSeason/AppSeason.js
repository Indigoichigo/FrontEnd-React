import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class AppSeason extends React.Component {
  constructor(props) {
    super();

    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err });
      }
    );
  }

  render() {
    return (
      <div>
        lat: {this.state.lat}
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

export default AppSeason;
