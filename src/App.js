import React, { Component } from "react";
import NewsPost from "./NewsPost.js";

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { news, newsInput } = this.state;
      const newNews = { text: newsInput };
      this.setState({
        news: [...news, newNews],
        newsInput: ""
      });
    }
  };

  render() {
    const { news } = this.state;

    return (
      <div className="App">
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          type="text"
        />
        <ul>
          {news.map((post, i) => {
            return <NewsPost key={i} text={post.text} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
