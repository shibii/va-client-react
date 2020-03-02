import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import SignUp from "./components/SignUp";

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
          <Route path="/">
            <Search></Search>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
