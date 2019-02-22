import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../src/styles.css";

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
  render() {
    return (
      <header>
        <img
          src="https://www.jccc.edu/_files/img/logo2x.png"
          alt="JCCC Logo"
          id="jccc-logo"
        />
      </header>
    );
  }
}

export default Header;
