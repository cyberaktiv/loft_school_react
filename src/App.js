import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleTabClick = step => {
    this.setState({ step: step });
  };

  handleChangeForm = (state, value) => {
    let s = {};
    s[state] = value;
    this.setState(s);
  };

  handleClickNextForm = () => {
    let { step } = this.state;
    step++;
    this.setState({ step: step });
  };

  handleChangeTimeOver = timeOver => {
    this.setState({ isTimeOver: timeOver });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (
      step === 1 &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      email.includes("@")
    ) {
      return true;
    }
    if (step === 2 && cardNumber.length === 16) {
      return true;
    }
    return false;
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    }

    if (step === 3) {
      return "Поздравляем!";
    }
  };

  render() {
    let { step, isTimeOver } = this.state;
    let disabled = !this.isFormCommitable() || !isTimeOver;

    let renderArr = [];

    if (step >= 1 && step <= 3) {
      const steps = {
        1: [
          { isSelected: true, isClickable: false },
          { isSelected: false, isClickable: false },
          { isSelected: false, isClickable: false }
        ],
        2: [
          { isSelected: false, isClickable: true },
          { isSelected: true, isClickable: false },
          { isSelected: false, isClickable: false }
        ],
        3: [
          { isSelected: false, isClickable: true },
          { isSelected: false, isClickable: true },
          { isSelected: true, isClickable: false }
        ]
      };

      renderArr = [
        <Step
          key={stepTitles[0]}
          onClick={this.handleTabClick}
          isSelected={steps[step][0].isSelected}
          number={1}
          isClickable={steps[step][0].isClickable}
        >
          Personal information
        </Step>,
        <Step
          key={stepTitles[1]}
          onClick={this.handleTabClick}
          isSelected={steps[step][1].isSelected}
          number={2}
          isClickable={steps[step][1].isClickable}
        >
          Card information
        </Step>,
        <Step
          key={stepTitles[2]}
          onClick={this.handleTabClick}
          isSelected={steps[step][2].isSelected}
          number={3}
          isClickable={steps[step][2].isClickable}
        >
          Finish
        </Step>
      ];
    }

    return (
      <div className="container tab-panel form-content button-panel">
        {renderArr.map(step => {
          return step;
        })}
        <button
          disabled={disabled}
          onClick={this.handleClickNextForm}
          className="button-next"
        />
      </div>
    );
  }
}

export default App;
