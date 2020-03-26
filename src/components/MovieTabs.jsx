import React from "react";

class MovieTabs extends React.Component {
  componentWillReceiveProps(nextProps, nextState) {
    console.log("nextProps: ", nextProps.sort_by);
    console.log("nextState: ", this.props.sort_by);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
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
  }
}

export default MovieTabs;
