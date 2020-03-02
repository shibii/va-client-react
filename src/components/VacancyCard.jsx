import React from "react";
import Moment from "react-moment";

export default props => {
  const { header, url, source, ts } = props.vacancy;
  return (
    <div className="bg-white hover:bg-brand-blue-200 p-2">
      <a href={url}>
        <div className="text-center text-brand-blue-500 text-sm">
          <span>{source}</span>
          <span> &middot; </span>
          <Moment format="D/M/YYYY" date={ts} />
        </div>
        <div className="text-center truncate font-bold text-lg">{header}</div>
      </a>
    </div>
  );
};
