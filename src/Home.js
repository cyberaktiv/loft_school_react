import React from "react";
import { Redirect } from "react-router-dom";

export default ({ match }) => {
  if (match.url === "/private") {
    return <Redirect from="/private" to="/auth" />;
  }
  return <p>Home page</p>;
};
