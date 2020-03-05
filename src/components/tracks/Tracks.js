import React, { Component } from "react";
import { ContextConsumer } from "../../Context";
import Spinner from "./../layout/Spinner";
import "./../css/HomePage.css";
import { Link } from "react-router-dom";

class Tracks extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ trackList, heading }) => {
          if (trackList === undefined || trackList.length === 0) {
            return <Spinner />;
          } else {
            console.log(trackList);
            return (
              <React.Fragment>
                <div className="heading">
                  <h1>{heading}</h1>
                </div>
                <div className="tracks-layout">
                  {trackList.map(({ track }) => {
                    return (
                      <div className="card" key={track.track_id}>
                        <div className="content">
                          <div>
                            <h2>{track.artist_name}</h2>
                          </div>
                          <div>
                            <i className="fas fa-compact-disc" />
                            <strong>Track</strong>: {track.track_name}
                          </div>
                          <div>
                            <i className="fas fa-music" />
                            <strong>Album</strong>:{track.album_name}
                          </div>
                        </div>
                        <Link
                          to={`lyrics/track/${track.track_id}`}
                          className="btn"
                        >
                            <div className="btn-name">
                              <i className="fas fa-chevron-right" />
                              View Lyrics
                            </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          }
        }}
      </ContextConsumer>
    );
  }
}

export default Tracks;
