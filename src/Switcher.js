import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    let id = parseInt(event.target.getAttribute("id"), 10);
    if (!id) {
      id = parseInt(event.target.dataset.id, 10);
    }
    this.setState({ selectedChild: id });
  };

  render() {
    let { children } = this.props,
      { selectedChild } = this.state,
      rendElement = children[selectedChild];

    return (
      <div>
        <nav>
          <ul className="component-list">
            {children.map((child, i) => {
              return (
                <li
                  key={"." + i}
                  className="component-list__name"
                  data-id={i}
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName ? (
                    child.type.displayName
                  ) : (
                    child.type.name
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{rendElement}</div>
      </div>
    );
  }
}

export default Switcher;
