import React, { Component } from "react";
import RequestApproval from "./RequestApproval";

class Confirmation extends Component {
  render() {
    return (
      <div className="container">
        <h1>Thank you for requesting Driver Approval</h1>
        <p>
          Your request has been submitted. You should receive a confirmation in
          48 hours. For a more immediate confirmation call ext. 555
        </p>
        <RequestApproval
          displayForm={this.props.displayForm}
          buttonLabel="Search Again"
          nextForm="home"
        />
      </div>
    );
  }
}

export default Confirmation;
