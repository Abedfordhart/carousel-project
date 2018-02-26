import React, { Component } from 'react';
import Header from './components/header/Header.js'
import MovieListEntry from './components/movieListEntry/MovieListEntry.js'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: '',
      currentPage: 1,
      numPages: 4
    }
  }

  componentDidMount() {
    this.getData(this.state.currentPage, this.state.numPages);
  }

  getData(page, amt) {
    axios.get(`/items/?page=${page}&amt=${amt}`)
      .then(data => {
      this.setState({movies: data});
      console.log(this.state.movies)
    })
  }
 
  render() {
    return (
      <div className="App">
          <Header/>
          <MovieListEntry/>
      </div>
    );
  }
}

export default App;