import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import classNames from "classnames";
import api from "../services/api";
import Results from "./Results";

export default props => {
  const [vacancies, setVacancies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    api
      .getHidden(parsed)
      .then(res => {
        setVacancies(res);
      })
      .catch(err => history.push("/login"));
  }, [history, location]);

  const nextPage = event => {
    event.preventDefault();
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    parsed.offsetId = vacancies[vacancies.length - 1].id;
    const urlencoded = qs.stringify(parsed);
    history.push("?" + urlencoded);
    window.scrollTo(0, 0);
  };

  const onChange = () => {
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    api
      .getHidden(parsed)
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
      <button
        className={classNames("block m-auto text-brand-secondary", {
          hidden: vacancies.length === 0
        })}
        onClick={nextPage}
      >
        next page
      </button>
    </div>
  );
};
