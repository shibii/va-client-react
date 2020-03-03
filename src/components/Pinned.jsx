import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import api from "../services/api";
import Results from "./Results";

export default props => {
  const [vacancies, setVacancies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  // when location changes makes an url encoded api call
  useEffect(() => {
    api
      .getPinned()
      .then(res => {
        setVacancies(res);
      })
      .catch(err => history.push("/login"));
  }, [history, location]);

  return (
    <div className="my-10">
      <div className="mt-2 shadow-xl">
        <Results vacancies={vacancies}></Results>
      </div>
    </div>
  );
};
