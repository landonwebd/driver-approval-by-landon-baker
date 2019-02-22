import React, { Component } from "react";
import NameEntry from "./NameEntry";
import NameToDisplay from "./NameToDisplay";
import RequestApproval from "./RequestApproval";
import Form from "./Form";
import Email from "./Email";
import Confirmation from "./Confirmation";
import "../src/styles.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Name: "Employee Name",
      DefensiveStatus: "Approved",
      DistractedStatus: "Approved",
      VanStatus: "Approved",
      Email: "email@email.com",
      Notes: "Notes",
      renderHome: true,
      renderForm: false,
      renderEmail: false,
      renderConfirmation: false
    };
  }

  updateState = newState => {
    this.setState(newState);
  };

  searchNames = nameToSearch => {
    this.updateState({ Name: nameToSearch });
  };

  displayForm = formName => {
    this.setState({
      renderForm: formName === "form",
      renderHome: formName === "home",
      renderEmail: formName === "email",
      renderConfirmation: formName === "confirmation"
    });
  };

  render() {
    if (this.state.renderHome) {
      return (
        <div className="container">
          <h1>JCCC Driver Approval Request</h1>
          <br />
          <NameEntry
            driverName={this.state.Name}
            searchNames={this.searchNames}
            updateState={this.updateState}
          />
          <NameToDisplay driverName={this.state.Name} />
          <RequestApproval
            displayForm={this.displayForm}
            buttonLabel="Check Driver Status"
            nextForm="form"
          />
        </div>
      );
    } else if (this.state.renderForm) {
      return (
        <Form
          driverName={this.state.Name}
          updateState={this.updateState}
          displayForm={this.displayForm}
        />
      );
    } else if (this.state.renderEmail) {
      return (
        <Email
          driverName={this.state.Name}
          driverEmail={this.state.Email}
          driverNotes={this.state.Notes}
          displayForm={this.displayForm}
        />
      );
    } else if (this.state.renderConfirmation) {
      return <Confirmation displayForm={this.displayForm} />;
    }
  }
}

export default Home;
