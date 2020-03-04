import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import Results from "./Results";

export default props => {
  const [vacancies, setVacancies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .getPinned()
      .then(res => {
        setVacancies(res);
      })
      .catch(err => history.push("/login"));
  }, [history]);

  const onChange = () => {
    api
      .getPinned()
      .then(res => {
        setVacancies(res);
      })
      .catch(err => history.push("/login"));
  };

  return (
    <div className="my-10">
      <div className="mt-2 shadow-xl">
        <Results vacancies={vacancies} onChange={onChange}></Results>
      </div>
    </div>
  );
};
