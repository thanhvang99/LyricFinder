import React, { Component } from "react";
import { Container } from "./../../App";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";
import Moment from "react-moment";
import './../css/LyricPage.css';

class LyricPage extends Component {
  state = {
    lyrics: [],
    track: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        const { lyrics } = res.data.message.body;
        this.setState({ lyrics: lyrics.lyrics_body });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        const { track } = res.data.message.body;
        console.log(track);
        this.setState({ track });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container name="full-height-grow lyricPage">
        <div className="LyricPage">
          <Link to="/" className="btn">
            <div className="btn-name">Go back</div>
          </Link>
          {(() => {
            let { lyrics, track } = this.state;
            if (
              lyrics.length === 0 ||
              lyrics === undefined ||
              Object.keys(track).length === 0
            ) {
              return <Spinner />;
            } else {
              let { music_genre_list } = this.state.track.primary_genres;
              return (
                <React.Fragment>
                  <div className="lyric">
                      <div className="info"><strong className="track-name">{track.track_name} By</strong> <span className="artist">{track.artist_name}</span></div>
                    <div className="body">{lyrics}</div>
                  </div>
                  <div className="details">
                    <div>
                      <strong>Album ID</strong>:{track.album_name}
                    </div>
                    <div>
                      <strong>Song Genre</strong>:
                      {music_genre_list.length === 0
                        ? "No"
                        : music_genre_list[0].music_genre.music_genre_name}
                    </div>
                    <div>
                      <strong>Explicit Words</strong>:
                      {track.explicit === 0 ? "No" : "Yes"}
                    </div>
                    <div>
                      <strong>Updated Time</strong>:
                      <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          })()}
        </div>
      </Container>
    );
  }
}

export default LyricPage;
