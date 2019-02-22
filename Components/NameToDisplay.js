import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../src/styles.css";

class NameToDisplay extends Component {
  render() {
    let { driverName } = this.props;
    let names = driverName.split(" ");
    return (
      <div className="NameToDisplay alignLeft">
        <p>
          {names[0]} {names[1]}
        </p>
      </div>
    );
  }
}

export default NameToDisplay;
