import React, { Component } from "react";
import Comment from "./Comment.js";

let id = 0;

function getNextId() {
  id++;
  return id;
}

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ commentInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { comments, commentInput } = this.state;
      const newComment = { id: getNextId(), text: commentInput };
      this.setState({ comments: [...comments, newComment], commentInput: "" });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const { text } = this.props;
    const { comments } = this.state;

    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          type="text"
        />
        <p>{text}</p>
        <ul>
          {comments.map(comment => {
            return (
              <Comment
                id={comment.id}
                key={comment.id}
                onDelete={this.handleDelete}
                text={comment.text}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NewsPost;
