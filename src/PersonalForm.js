import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            onChange={this.handleChangeForm}
            type="text"
            name="firstName"
            value=""
          />
          <input
            onChange={this.handleChangeForm}
            type="text"
            name="lastName"
            value=""
          />
          <input
            onChange={this.handleChangeForm}
            type="text"
            name="email"
            value=""
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
