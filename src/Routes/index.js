import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import TopBar from "../components/container/TopBar";
import Dashboard from "./Dashboard";
export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <TopBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/create"
            render={({ history }) => <Create history={history} />}
          />
          <Route
            path="/dashboard/:guru/"
            render={({ match }) => <Dashboard match={match} />}
          />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
