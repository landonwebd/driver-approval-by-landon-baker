import React, { Component } from "react";
import RequestApproval from "./RequestApproval";
import DriverList from "../data/drivers.json";
import "../src/styles.css";

class Email extends Component {
  render() {
    let { driverName, driverEmail, driverNotes } = this.props;

    let driverStatus = DriverList.filter(driver => {
      let fullName = driver.first_name + " " + driver.last_name;
      return driverName === fullName;
    })[0];

    let distractedStatus = driverStatus.status.distracted.status;
    let defensiveStatus = driverStatus.status.defensive.status;
    let vansStatus = driverStatus.status.vans.status;

    return (
      <div className="container">
        <h1>Driver Approval Request Email</h1>
        <br />
        <p>The following employee is requesting driver approval:</p>
        <ul>
          <li>
            <span className="bold">Driver:</span> {driverName}{" "}
          </li>
        </ul>
        <br />
        <p>Below are their current statuses:</p>
        <ul>
          <li>
            <span className="bold">Distracted Driver Status:</span>{" "}
            {distractedStatus.charAt(0).toUpperCase() +
              distractedStatus.substr(1)}
          </li>
          <li>
            <span className="bold">Defensive Driver Status:</span>{" "}
            {defensiveStatus.charAt(0).toUpperCase() +
              defensiveStatus.substr(1)}
          </li>
          <li>
            <span className="bold">Van Driver Status:</span>{" "}
            {vansStatus.charAt(0).toUpperCase() + vansStatus.substr(1)}
          </li>
        </ul>
        <br />
        <p>
          <span className="bold">Their email is:</span> {driverEmail}
        </p>
        <p>
          <span className="bold">Notes:</span> {driverNotes}{" "}
        </p>
        <br />
        <RequestApproval
          displayForm={this.props.displayForm}
          buttonLabel="Return Home"
          nextForm="home"
        />
      </div>
    );
  }
}

export default Email;
