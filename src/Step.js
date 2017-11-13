import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    if (isClickable) {
      onClick(number);
    }
  };

  render() {
    const { isSelected, isClickable, number, children } = this.props;
    let classStep = "step";
    if (isClickable) classStep += " step-clickable";
    if (isSelected) classStep += " step-selected";

    return (
      <div className={classStep}>
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
