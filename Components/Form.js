import React, { Component } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import RequestApproval from "./RequestApproval";
import DriverList from "../data/drivers.json";

class Form extends Component {
  updateDriverInformation = (value, key) => {
    let properties = {};
    properties[key] = value;
    this.props.updateState(properties);
  };

  render() {
    let { driverName } = this.props;

    let driverStatus = DriverList.filter(driver => {
      let fullName = driver.first_name + " " + driver.last_name;
      return driverName === fullName;
    });

    if (driverStatus.length < 1) {
      return (
        <div className="container">
          <span className="bold">Unable to find a driver</span>
          <RequestApproval
            displayForm={this.props.displayForm}
            buttonLabel="Return Home"
            nextForm="home"
          />
        </div>
      );
    }

    driverStatus = driverStatus[0];

    let distractedStatus = driverStatus.status.distracted.status;
    let defensiveStatus = driverStatus.status.defensive.status;
    let vansStatus = driverStatus.status.vans.status;

    if (
      distractedStatus === "approved" &&
      defensiveStatus === "approved" &&
      vansStatus === "approved"
    ) {
      return (
        <div className="container">
          <span className="bold">Driver is Approved</span>
          <RequestApproval
            displayForm={this.props.displayForm}
            buttonLabel="Return Home"
            nextForm="home"
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Request Approval</h1>
          <form>
            <p>
              <span className="bold">Driver Name:</span> {driverName}
            </p>
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
            <label htmlFor="emailEntry">Please enter your email:</label>
            <input
              required
              className="thirtyThreePercent"
              type="text"
              name="emailEntry"
              placeholder="email"
              onChange={event => {
                this.updateDriverInformation(event.target.value, "Email");
              }}
            />

            <label id="notes">
              <span className="bold">Notes:</span>
            </label>
            <textarea
              onChange={event => {
                this.updateDriverInformation(event.target.value, "Notes");
              }}
            />
            <RequestApproval
              displayForm={this.props.displayForm}
              buttonLabel="Request Approval"
              nextForm="confirmation"
            />
            <RequestApproval
              displayForm={this.props.displayForm}
              buttonLabel="Show Email"
              nextForm="email"
            />
          </form>
        </div>
      );
    }
  }
}
export default Form;
