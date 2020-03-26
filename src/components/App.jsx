import React, { Component } from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "./../utils/api";
import MovieTabs from "./MovieTabs";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevprops: ", prevProps, prevState);
    console.log("this: ", this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by) {
      console.log("call api");
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&language=ru-RU`
    )
      .then(response => {
        console.log("then");
        return response.json();
      })
      .then(data => {
        console.log("data: ", data);
        this.setState({
          movies: data.results
        });
      });
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-8">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <h6>List of films</h6>
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
            <div className="card card-body">
              {this.state.moviesWillWatch.map(movie => {
                return <p key={movie.id}>{movie.title}</p>;
              })}
            </div>
            <button>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
