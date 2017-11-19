import React, { Component } from "react";

class CardNumberInput extends Component {
  state = {
    number: ""
  };

  format = str => {
    if (typeof str !== "string" && typeof str !== "number") {
      return "";
    }
    if (typeof str === "number") {
      str = str.toString();
    }

    let res = "";

    for (let i = 0; i < str.length; i++) {
      res += str[i];
      if ((i + 1) % 4 === 0 && i !== str.length - 1) {
        res += " ";
      }
    }
    return res;
  };

  componentWillReceiveProps = props => {
    let { cardNumber } = props;
    this.setState({ number: this.format(cardNumber) });
  };

  normalize = string => {
    return string.replace(/ /g, "");
  };

  componentDidMount = () => {
    this.componentWillReceiveProps(this.props);
  };

  handleChange = event => {
    let { onChange } = this.props;
    let { value } = event.target;
    onChange(this.normalize(value));
  };

  render() {
    let { number } = this.state;

    return <input value={number} onChange={this.handleChange} />;
  }
}

export default CardNumberInput;
