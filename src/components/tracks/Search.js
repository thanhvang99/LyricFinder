import React, { Component } from "react";
import { ContextConsumer } from "./../../Context";
import axios from "axios";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  findTrack(dispatch, e) {
    e.preventDefault();
    // console.log(dispatch);

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
          .then(res =>{
              dispatch({
                  type: "SEARCH_TRACKS",
                  payload: res.data.message.body.track_list,
              })
              this.setState({trackTitle: ""})
          }
      )
      .catch(err => console.log(err));
  }

  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  render() {
    return (
      <ContextConsumer>
        {value => {
          return (
            <div className="search">
              <div className="title">
                <span>
                  <i className="fas fa-music" />
                </span>
                Search For A Song
              </div>
              <div className="subscript">Get the lyrics for any track</div>

              <form
                onSubmit={this.findTrack.bind(this, value.dispatch)}
                className="input-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "stretch"
                }}
              >
                <input
                  type="text"
                  placeholder="Song tittle..."
                  value={this.state.trackTitle}
                  onChange={this.handleChange.bind(this)}
                    name="trackTitle"
                />
                <button type="submit" className="btn">
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default Search;
