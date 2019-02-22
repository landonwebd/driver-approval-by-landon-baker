import React, { Component } from "react";
import "../src/styles.css";

class NameEntry extends Component {
  searchNames = events => {
    this.props.updateState({ Name: events.target.value });
  };

  render() {
    return (
      <div className="nameEntry alignLeft">
        <label htmlFor="NameEntry">Please enter a name</label>
        <br />
        <input
          className="thirtyThreePercent"
          type="text"
          name="NameEntry"
          placeholder={this.props.driverName}
          onChange={this.searchNames}
          required
        />
      </div>
    );
  }
}

export default NameEntry;
