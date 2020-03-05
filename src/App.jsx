import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import SignUp from "./components/SignUp";
import Hidden from "./components/Hidden";
import Pinned from "./components/Pinned";
import SectionSelector from "./components/SectionSelector";

export default () => {
  return (
    <div className="m-auto w-full max-w-4xl">
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SectionSelector></SectionSelector>
            <SignUp></SignUp>
          </Route>
          <Route path="/hidden">
            <SectionSelector></SectionSelector>
            <Hidden></Hidden>
          </Route>
          <Route path="/pinned">
            <SectionSelector></SectionSelector>
            <Pinned></Pinned>
          </Route>
          <Route path="/">
            <SectionSelector></SectionSelector>
            <Search></Search>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
