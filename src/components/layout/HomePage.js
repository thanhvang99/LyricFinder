import React, { Component } from "react";
import { Container } from "./../../App";
import Tracks from "./../tracks/Tracks";
import './../css/HomePage.css'
import Search from './../tracks/Search';

class HomePage extends Component {
  render() {
    return (
      <Container name="full-height-grow homepage">
        <div className="HomePage">
            <Search />
          <Tracks />
        </div>
      </Container>
    );
  }
}

export default HomePage;
