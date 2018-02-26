import React, { Component } from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
 
  render() {
    return (
      <div>
        <div className="movie-container">
        <i className="material-icons nav">chevron_left</i>
          <div>
            <img className="movie" alt= '' src="https://placeimg.com/224/283/arch/grayscale"/>
            <div className="title">Movie Title</div>
            <div className="genre">Movie Genre</div>
          </div>
          <div>
            <img className="movie" alt= '' src="https://placeimg.com/224/283/arch/grayscale"/>
            <div className="title">Movie Title</div>
            <div className="genre">Movie Genre</div>
          </div>
          <div>
            <img className="movie" alt= '' src="https://placeimg.com/224/283/arch/grayscale"/>
            <div className="title">Movie Title</div>
            <div className="genre">Movie Genre</div>
          </div>
          <div>
            <img className="movie" alt= '' src="https://placeimg.com/224/283/arch/grayscale"/>
            <div className="title">Movie Title</div>
            <div className="genre">Movie Genre</div>
          </div>
        <i className="material-icons nav">chevron_right</i>
        </div>
      </div>
    );
  }
}

export default MovieListEntry;