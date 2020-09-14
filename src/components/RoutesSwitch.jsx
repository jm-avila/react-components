import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";

export default () => {
  return (
    <Switch>
      <Route exact path="/layout" component={Layout} />
      <Redirect exact to="/" />
    </Switch>
  );
};
