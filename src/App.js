import React, { Component } from 'react';
import MediaList from './components/MediaList/MediaList.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      media: [],
      currentPage: 1,
      numPages: 4,
      indicators: []
    }

    this.getData = this.getData.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.currentPage, this.state.numPages);
    this.indicator();
  }

  getData(page, amt) {
    axios.get(`/items/?page=${page}&amt=${amt}`)
      .then(data => {
      this.setState({media: data.data});
      this.indicator();
    })
      .catch(err => {
        throw err;
      })
  }

  next() {
    let currentPage = this.state.currentPage
    if(currentPage < 4) {
      currentPage++;
    } else if(currentPage >= 4) {
      currentPage = 1;
    }
    this.setState({currentPage: currentPage});
    this.getData(currentPage, this.state.numPages);
  }

  previous() {
    let currentPage = this.state.currentPage
    if(currentPage > 1) {
      currentPage--;
    } else if(currentPage <= 1) {
      currentPage = 4;
    }
    this.setState({currentPage: currentPage});
    this.getData(currentPage, this.state.numPages);
  }

  indicator() {
    let currentPage = this.state.currentPage;
    let numPages = this.state.numPages;
    let indicators = [];

    for (let i = 1; i <= numPages; i++) {
      if (i === currentPage) {
        indicators.push(<i key={i} className="material-icons indicator active">panorama_fish_eye</i>)
      } else {
        indicators.push(<i key={i} className="material-icons indicator">panorama_fish_eye</i>)
      }
    }

    this.setState({indicators: indicators});
  }

  render() {
    return (
      <div id="App">
        <div className="rec">Top recommendations for you
          <div className="indicator-container">
            {this.state.indicators}
          </div>
        </div>
        <MediaList media={this.state.media} next={this.next} previous={this.previous} getData={this.getData} currentPage={this.state.currentPage} numPages={this.state.numPages}/>
      </div>
    );
  }
}

export default App;