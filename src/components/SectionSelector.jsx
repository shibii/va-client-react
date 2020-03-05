import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { ReactComponent as SearchIcon } from "../icons/bx-search-alt.svg";
import { ReactComponent as PinIcon } from "../icons/bx-pin.svg";
import { ReactComponent as HideIcon } from "../icons/bxs-hide.svg";

export default props => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="w-full flex justify-center font-bold">
      <Link to="/search?limit=20">
        <div
          className={classNames("px-10 pt-1 bg-brand-dark-700 shadow-xl", {
            "bg-brand-primary text-brand-dark-700 fill-current":
              pathname === "/search"
          })}
        >
          <SearchIcon
            className={classNames("m-auto w-6 h-6", {
              "text-brand-primary fill-current": pathname !== "/search"
            })}
          ></SearchIcon>
          <span>search</span>
        </div>
      </Link>
      <Link to="/pinned?limit=20">
        <div
          className={classNames("px-10 pt-1 bg-brand-dark-700 shadow-xl", {
            "bg-brand-primary text-brand-dark-700 fill-current":
              pathname === "/pinned"
          })}
        >
          <PinIcon
            className={classNames("m-auto w-6 h-6", {
              "text-brand-primary fill-current": pathname !== "/pinned"
            })}
          ></PinIcon>
          <span>pinned</span>
        </div>
      </Link>
      <Link to="/hidden?limit=20">
        <div
          className={classNames("px-10 pt-1 bg-brand-dark-700 shadow-xl", {
            "bg-brand-primary text-brand-dark-700": pathname === "/hidden"
          })}
        >
          <HideIcon
            className={classNames("m-auto w-6 h-6", {
              "text-brand-primary fill-current": pathname !== "/hidden"
            })}
          ></HideIcon>
          <span>hidden</span>
        </div>
      </Link>
    </div>
  );
};
