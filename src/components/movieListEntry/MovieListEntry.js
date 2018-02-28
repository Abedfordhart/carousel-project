import React, { Component } from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
  // constructor(props){
  //   super(props)
  // }

  handleNav() {
    console.log('clicked');
  }

  render() {
    console.log('here are your props sir', this.props)
    return (
      <div>
        <div className="movie-container">
          <i className="material-icons nav" onClick={this.props.previous}>chevron_left</i>
            {this.props.media.map((media, i) => {
              return (
                <div className="media" key={i}>
                <i className="material-icons heart">favorite</i>
                  <img className="movie" alt= '' src={media.itemData.image}/>
                  <div className="title">{media.name}</div>
                  <div className="genre">{media.itemData.definingInfo}</div>
                </div>
              )
            })}
          <i className="material-icons nav" onClick={this.props.next}>chevron_right</i>
        </div>
      </div>
    );
  }
}

export default MovieListEntry;