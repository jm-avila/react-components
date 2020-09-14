import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Calculator from "./Calculator";
import Counter from "./Counter";
import MrSparkle from "./MrSparkle";

export default () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/mr-sparkle" component={MrSparkle} />
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
};
