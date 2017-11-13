import React, { Component } from "react";
import Title from "./Title";
import "./CardForm.css";

export class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftTime: 120
    };
    props.onChangeTimeOver(false);
  }

  componentDidMount() {
    this.id = setInterval(() => {
      const leftTime = Math.max(this.state.leftTime - 1, 0);
      this.setState({ leftTime });
      if (leftTime === 0 && this.state.leftTime === 1) {
        this.props.onChangeTimeOver(true);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };

  render() {
    const { leftTime } = this.state;

    return (
      <div>
        <Title>Номер карты</Title>
        <p className="card-form left-time">
          Осталось {leftTime} секунд
          <input
            type="text"
            onChange={this.handleChangeForm}
            name="cardNumber"
          />
        </p>
      </div>
    );
  }
}

export default CardForm;
