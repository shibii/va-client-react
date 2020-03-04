import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../services/api";

export default props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const history = useHistory();

  const login = event => {
    event.preventDefault();
    api
      .signup(email, password)
      .then(res => history.push("/login"))
      .catch(err => setError(true));
  };

  return (
    <div className="w-full max-w-sm mx-auto py-4 mt-20 bg-brand-dark-700 shadow-2xl">
      <form className="flex flex-col px-6" onSubmit={login}>
        <label
          className="pt-4 pb-1 font-bold text-brand-secondary text-sm"
          htmlFor="email"
        >
          email
        </label>
        <input
          className="p-2 appearance-none bg-brand-light-300 text-brand-dark-700 font-bold text-lg shadow-outline"
          id="email"
          type="text"
          value={email}
          onChange={event => {
            event.preventDefault();
            setEmail(event.target.value);
          }}
        ></input>
        <label
          className="pt-4 pb-1 font-bold text-brand-secondary text-sm"
          htmlFor="password"
        >
          password
        </label>
        <input
          className="p-2 appearance-none bg-brand-light-300 text-brand-dark-700 font-bold text-lg shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={event => {
            event.preventDefault();
            setPassword(event.target.value);
          }}
        ></input>
        <input
          className="mt-8 p-2 bg-brand-secondary text-brand-dark-500 hover:text-white font-bold text-lg shadow-xl cursor-pointer"
          type="submit"
          value="sign up"
        ></input>
      </form>
    </div>
  );
};
