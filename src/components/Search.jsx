import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import api from "../services/api";
import Results from "./Results";
import SearchHeader from "./SearchHeader";

export default props => {
  const [vacancies, setVacancies] = useState([]);
  const [terms, setTerms] = useState("");
  const history = useHistory();
  const location = useLocation();

  // when location changes makes an url encoded api call
  useEffect(() => {
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    setTerms(parsed.terms);
    if (Object.entries(parsed).length !== 0) {
      api
        .search(parsed)
        .then(res => {
          setVacancies(res);
        })
        .catch(err => history.push("/login"));
    }
  }, [history, location]);

  const search = event => {
    event.preventDefault();
    if (terms.length !== 0) {
      const urlencoded = qs.stringify({ terms });
      history.push("?" + urlencoded);
    }
  };

  const changeInVacancy = () => {
    console.log("changeInVacancy");
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
    setTerms(parsed.terms);
    if (Object.entries(parsed).length !== 0) {
      api
        .search(parsed)
        .then(res => {
          setVacancies(res);
        })
        .catch(err => {
          console.log(err);
          history.push("/login");
        });
    }
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
    </div>
  );
};
