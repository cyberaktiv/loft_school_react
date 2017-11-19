import { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  render() {
    let { children } = this.props;
    return ReactDOM.createPortal(children, document.getElementById("modal"));
  }
}

export default Modal;
