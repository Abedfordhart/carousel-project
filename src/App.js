import React, { Component } from 'react';
//import Header from './components/header/Header.js';
import MovieListEntry from './components/movieListEntry/MovieListEntry.js';
//import Indicator from './components/indicator/Indicator.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      media: [],
      currentPage: 1,
      numPages: 4
    }

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.currentPage, this.state.numPages);
  }

  getData(page, amt) {
    axios.get(`/items/?page=${page}&amt=${amt}`)
      .then(data => {
      this.setState({media: data.data});
      console.log(this.state.media)
    })
  }

  next() {
    let currentPage = this.state.currentPage
    currentPage++;
    this.setState({currentPage: currentPage});
    this.getData(currentPage, this.state.numPages);
  }

  previous() {
    let currentPage = this.state.currentPage
    currentPage--;
    this.setState({currentPage: currentPage});
    this.getData(currentPage, this.state.numPages);
  }
 
  render() {
    return (
      <div className="App">
          <h1 className="rec">Top recommendations for you</h1>
          <MovieListEntry media={this.state.media} next={this.next} previous={this.previous}/>
      </div>
    );
  }
}

export default App;