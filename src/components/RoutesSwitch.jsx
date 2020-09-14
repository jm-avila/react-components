import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Calculator from "./Calculator";
import Counter from "./Counter";

export default () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/counter" component={Counter} />
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
};
