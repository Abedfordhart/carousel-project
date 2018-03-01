import React, { Component } from 'react';
import MovieListEntry from './components/movieListEntry/MovieListEntry.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      media: [],
      currentPage: 1,
      numPages: 4 
    }

    this.getData = this.getData.bind(this);
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
 
  render() {
    return (
      <div className="App">
          <h1 className="rec">Top recommendations for you</h1>
          <MovieListEntry media={this.state.media} next={this.next} previous={this.previous} getData={this.getData} currentPage={this.state.currentPage} numPages={this.state.numPages}/>
      </div>
    );
  }
}

export default App;