import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  static displayName = "CNHName";

  state = {
    cardNumber: ""
  };

  handleChange = number => {
    this.setState({ cardNumber: number });
  };

  render() {
    let { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
