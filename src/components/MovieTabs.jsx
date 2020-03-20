import React from "react";

const MovieTabs = ({ sort_by, updateSortBy }) => {
  const handlerClick = value => {
    return event => {
      updateSortBy(value);
    };
  };

  const getClassLink = value => {
    return `nav-link ${sort_by === value ? "active" : null}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassLink("popularity.desc")}
          onClick={handlerClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("revenue.desc")}
          onClick={handlerClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("vote_average.desc")}
          onClick={handlerClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
