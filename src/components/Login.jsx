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
      .login(email, password)
      .then(res => history.push("/search"))
      .catch(err => setError(true));
  };

  return (
    <div className="w-full max-w-sm mx-auto py-4 mt-20 bg-white shadow-2xl">
      <form className="flex flex-col px-6" onSubmit={login}>
        <label className="pt-4 font-bold text-sm" htmlFor="email">
          email
        </label>
        <input
          className="p-2 appearance-none bg-brand-white font-bold text-lg shadow-inner"
          id="email"
          type="text"
          value={email}
          onChange={event => {
            event.preventDefault();
            setEmail(event.target.value);
          }}
        ></input>
        <label className="pt-4 font-bold text-sm" htmlFor="password">
          password
        </label>
        <input
          className="p-2 appearance-none bg-brand-white font-bold text-lg shadow-inner"
          id="password"
          type="password"
          value={password}
          onChange={event => {
            event.preventDefault();
            setPassword(event.target.value);
          }}
        ></input>
        <p className="pt-4 text-center font-bold text-sm">
          Dont have an account?{" "}
          <Link className="text-brand-blue-500" to="/signup">
            Register!
          </Link>
        </p>
        <input
          className="p-2 bg-brand-blue-500 hover:text-white font-bold text-lg shadow-md cursor-pointer"
          type="submit"
          value="login"
        ></input>
      </form>
    </div>
  );
};
