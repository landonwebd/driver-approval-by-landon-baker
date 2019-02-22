import React, { Component } from "react";
import { Link } from "react-router-dom";

class RequestApproval extends Component {
  displayForm = () => {
    this.props.displayForm(this.props.nextForm);
  };

  render() {
    return (
      <button className="buttonFormat" onClick={this.displayForm}>
        {this.props.buttonLabel}
      </button>
    );
  }
}

export default RequestApproval;
