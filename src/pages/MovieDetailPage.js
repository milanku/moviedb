import React, { Component } from "react";
import { fetchMovieDetail } from "../actions";
import { connect } from "react-redux";
import MovieDetailPanel from "../components/MovieDetailPanel";
import LoadingSpinner from "../components/LoadingSpinner";

class MovieDetailPage extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movieDetail, movieLoading, movieError } = this.props;
    return movieLoading ? (
      <LoadingSpinner />
    ) : Object.keys(movieDetail).length === 0 ? (
      <span>{movieError}</span>
    ) : (
      <MovieDetailPanel movie={movieDetail} />
    );
  }
}

const mapStateToProps = ({ movieDetail, movieLoading, movieError }) => ({
  movieDetail,
  movieLoading,
  movieError
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: movieID => dispatch(fetchMovieDetail(movieID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailPage);
