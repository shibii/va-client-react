import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default props => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="w-full flex justify-center h-10 font-bold">
      <Link to="/search?limit=20">
        <div
          className={classNames("px-10 py-2 bg-brand-dark-700 shadow-xl", {
            "bg-brand-primary text-brand-dark-700": pathname === "/search"
          })}
        >
          search
        </div>
      </Link>
      <Link to="/pinned?limit=20">
        <div
          className={classNames("px-10 py-2 bg-brand-dark-700 shadow-xl", {
            "bg-brand-primary text-brand-dark-700": pathname === "/pinned"
          })}
        >
          pinned
        </div>
      </Link>
      <Link to="/hidden?limit=20">
        <div
          className={classNames("px-10 py-2 bg-brand-dark-700 shadow-xl", {
            "bg-brand-primary text-brand-dark-700": pathname === "/hidden"
          })}
        >
          hidden
        </div>
      </Link>
    </div>
  );
};
