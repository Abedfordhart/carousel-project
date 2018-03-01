import React, { Component } from 'react';
import './MediaList.css';
import axios from 'axios';

class MediaList extends Component {

  componentDidMount() {
    axios.post(`/items/${852374}`, {
      rating: null
    })
    .catch(err => {
      throw err
    })
  }

  handleFavorite(uuid) {
    axios.post(`/items/${uuid}`, {
      rating: 'like' || null
    })
    .catch(err => {
      throw err
    })
    this.props.getData(this.props.currentPage, this.props.numPages)
  }

  genreSpacer(genre){
    genre = genre.replace(/([a-z])([A-Z])/g, '$1 $2');
    return genre;
  }

  render() {
    return (
      <div>
        <div className="movie-container">
          <i className="material-icons nav" onClick={this.props.previous}>chevron_left</i>
            {this.props.media.map((media, i) => {
              return (
                <div className="media" key={i}>
                  {media.rating === null ? <i className="material-icons heart" onClick={() => this.handleFavorite(media.uuid)}>favorite</i> : null} 
                  {media.itemData.youtube_video ? <i className="material-icons play" onClick={() => window.open(`https://www.youtube.com/watch?v=${media.itemData.youtube_video}`)}>play_circle_outline</i> : null }
                  {media.itemData.image ? <img className="movie" alt='' src={media.itemData.image}/> : <img className="movie" alt='' src="https://dummyimage.com/224x283/ffffff/1b1b00&text=No+Image+Available"/>}
                  <div className="title">{media.name}</div>
                  <div className="genre">{this.genreSpacer(media.itemData.definingInfo)}</div>
                </div>
              )
            })}
          <i className="material-icons nav" onClick={this.props.next}>chevron_right</i>
        </div>
      </div>
    );
  }
}

export default MediaList;