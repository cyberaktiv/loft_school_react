import React, { Component } from "react";

class Comment extends Component {
  handleDelete = event => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
        <span className="delete" onClick={this.handleDelete} />
      </div>
    );
  }
}

export default Comment;
