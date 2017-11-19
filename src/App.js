import React, { Component } from "react";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Private from "./Private";
import Auth from "./Auth";
import Public from "./Public";

import "./App.css";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    let { isAuthorized } = this.state,
      privateRoute =
        isAuthorized === true ? (
          <Route path="/private" component={Private} />
        ) : (
          <Route path="*" component={Home} />
        );

    return (
      <div>
        <ul>
          <li>
            <Link to="/auth">Войти</Link>
          </li>
          <li>
            <Link to="/private">Секретная страница</Link>
          </li>
          <li>
            <Link to="/public">Публичная страница</Link>
          </li>
          <li>
            <Link to="/">Главная</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/public" component={Public} />
          {privateRoute}
        </Switch>
      </div>
    );
  }
}

export default App;
