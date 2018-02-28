import React, {Component} from 'react';
import './Indicator.css'

class Indicator extends Component {
  render() {
    return (
      <div className="indicator-container">
        <i className="material-icons indicator">panorama_fish_eye</i>
        <i className="material-icons indicator">panorama_fish_eye</i>
        <i className="material-icons indicator">panorama_fish_eye</i>
        <i className="material-icons indicator">panorama_fish_eye</i>
      </div>
    )
  }
};

export default Indicator