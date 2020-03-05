import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./../../App.js";

class Header extends Component {
  render() {
    return (
      <Container name="header" background="#4F4F4F">
        <div className="header">
          <h1 className="logo-name">
            <Link to="/">LyricFinder</Link>
          </h1>
        </div>
      </Container>
    );
  }
}

export default Header;
