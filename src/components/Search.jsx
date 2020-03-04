import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import classNames from "classnames";
import api from "../services/api";
import Results from "./Results";
import SearchHeader from "./SearchHeader";

export default props => {
  const [vacancies, setVacancies] = useState([]);
  const [terms, setTerms] = useState("");
  const history = useHistory();
  const location = useLocation();

  const apiQueryFromUrl = () => {
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    setTerms(parsed.terms);
    if (parsed.terms) {
      api
        .fts(parsed)
        .then(res => {
          setVacancies(res);
        })
        .catch(err => history.push("/login"));
    }
  };

  // when location changes makes an url encoded api call
  useEffect(() => {
    apiQueryFromUrl();
  }, [history, location]);

  const search = event => {
    event.preventDefault();
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    parsed.terms = terms;
    parsed.offsetId = undefined;
    parsed.limit = 20;
    const urlencoded = qs.stringify(parsed);
    history.push("?" + urlencoded);
  };

  const nextPage = event => {
    event.preventDefault();
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    parsed.offsetId = vacancies[vacancies.length - 1].id;
    const urlencoded = qs.stringify(parsed);
    history.push("?" + urlencoded);
    window.scrollTo(0, 0);
  };

  const changeInVacancy = () => {
    apiQueryFromUrl();
  };

  const onChange = event => {
    setTerms(event.target.value);
  };

  return (
    <div className="my-10">
      <SearchHeader></SearchHeader>
      <div className="mt-8 shadow-xl">
        <form className="w-full" onSubmit={search}>
          <input
            className="w-full p-2 bg-brand-dark-700 font-bold text-lg truncate"
            type="text"
            value={terms}
            onChange={onChange}
            placeholder="search..."
            spellCheck="false"
          ></input>
          <input className="hidden" type="submit"></input>
        </form>
      </div>
      <div className="mt-2 shadow-xl">
        <Results vacancies={vacancies} onChange={changeInVacancy}></Results>
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
