import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import SignUp from "./components/SignUp";
import Hidden from "./components/Hidden";
import Pinned from "./components/Pinned";

export default () => {
  return (
    <div className="m-auto w-full max-w-xl">
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/hidden">
            <Hidden></Hidden>
          </Route>
          <Route path="/pinned">
            <Pinned></Pinned>
          </Route>
          <Route path="/">
            <Search></Search>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
