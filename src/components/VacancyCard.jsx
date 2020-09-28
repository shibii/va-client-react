import React from "react";
import { useHistory } from "react-router-dom";
import { parse, format, formatDistanceToNow, differenceInDays } from "date-fns";
import classNames from "classnames";
import api from "../services/api";

const generateTimestamp = (ts) => {
  let time = parse(
    // remove millisecond suffix
    ts.replace(/\.[^.]*$/, ""),
    "yyyy-MM-dd HH:mm:ss",
    new Date()
  );

  if (differenceInDays(new Date(), time) < 4) {
    return formatDistanceToNow(time, { addSuffix: true });
  } else {
    return format(time, "d/M/Y");
  }
};

export default (props) => {
  const { id, header, url, source, ts, hidden, pinned } = props.vacancy;
  let history = useHistory();

  const handleHide = (event) => {
    event.preventDefault();
    if (hidden) {
      api
        .unhide(id)
        .then((res) => props.onChange())
        .catch((err) => history.push("/login"));
    } else {
      api
        .hide(id)
        .then((res) => props.onChange())
        .catch((err) => history.push("/login"));
    }
  };

  const handlePin = (event) => {
    event.preventDefault();
    if (pinned) {
      api
        .unpin(id)
        .then((res) => props.onChange())
        .catch((err) => history.push("/login"));
    } else {
      api
        .pin(id)
        .then((res) => props.onChange())
        .catch((err) => history.push("/login"));
    }
  };

  return (
    <div className="bg-brand-dark-700 p-2">
      <a href={url}>
        <div className="text-center text-brand-primary text-xs tracking-widest">
          <span>{source}</span>
          <span> &middot; </span>
          <span>{generateTimestamp(ts)}</span>
        </div>
        <div className="p-2 text-center truncate font-semibold text-brand-light-300 text-xl">
          {header}
        </div>
        <div className="text-center text-brand-primary">
          <span
            className={classNames(
              { "text-brand-tertiary": hidden },
              "hover:text-brand-light-100"
            )}
            onClick={handleHide}
          >
            {hidden ? "unhide" : "hide"}
          </span>
          <span> &middot; </span>
          <span
            className={classNames(
              { "text-brand-tertiary": pinned },
              "hover:text-brand-light-100"
            )}
            onClick={handlePin}
          >
            {pinned ? "unpin" : "pin"}
          </span>
        </div>
      </a>
    </div>
  );
};
