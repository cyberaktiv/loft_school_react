import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalButton.css";

class ModalButton extends Component {
  static displayName = "MBName";

  state = {
    isModalShow: false
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  handleClick = () => {
    let { isModalShow } = this.state;

    if (isModalShow) {
      this.hideModal();
    } else {
      this.showModal();
    }
  };

  render() {
    let { isModalShow } = this.state,
      button = <button onClick={this.handleClick}>Show modal!</button>,
      modal = isModalShow ? (
        <Modal>
          <div className="modal">
            <div className="modal__fog">
              <div className="modal__body">
                <h1>Модальное окно!</h1>
                <button onClick={this.handleClick}>Закрыть</button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null;

    return (
      <div>
        {button}
        {modal}
      </div>
    );
  }
}

export default ModalButton;
