import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";

export default props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const history = useHistory();

  const signup = event => {
    event.preventDefault();
    api
      .signup(email, password)
      .then(() => history.push("/login"))
      .catch(err => setError(true));
  };

  return (
    <div>
      <span>sign up</span>
      <form onSubmit={signup}>
        <input
          type="email"
          value={email}
          onChange={event => {
            event.preventDefault();
            setEmail(event.target.value);
          }}
        ></input>
        <input
          type="password"
          value={password}
          onChange={event => {
            event.preventDefault();
            setPassword(event.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};
