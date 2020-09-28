import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchNewMovies, searchMoreMovies } from "../actions";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";

class MovieSearchPage extends Component {
  state = {
    movieSearchPhrase: ""
  };

  componentDidMount() {
    const { searchPhrase } = this.props;
    searchPhrase &&
      this.setState({
        movieSearchPhrase: searchPhrase
      });
  }

  getMovies = () => {
    this.props.loadMovies(this.state.movieSearchPhrase);
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { movieSearchPhrase } = this.state;
    const {
      searchedMovies,
      searchError,
      totalResults,
      isSearchLoading
    } = this.props;
    return (
      <div style={{ width: "calc(100% - 230px)", marginTop: "18px" }}>
        <Form
          inline
          onSubmit={e => {
            e.preventDefault();
            this.props.loadNewMovies(movieSearchPhrase);
          }}
        >
          <Form.Control
            id="movieSearchPhrase"
            placeholder="Movie Title"
            size="md"
            type="text"
            required
            value={this.state.movieSearchPhrase}
            onChange={this.handleChange}
          />
          <Button type="submit" className="ml-2">
            Search
          </Button>
        </Form>
        <InfiniteScroll
          dataLength={searchedMovies ? searchedMovies.length : 0}
          next={() => this.props.loadMoreMovies(movieSearchPhrase)}
          hasMore={searchedMovies && searchedMovies.length !== totalResults}
          height={window.innerHeight - 86}
          style={{
            margin: "15px 0",
            width: "100%"
          }}
          endMessage={
            totalResults ? (
              <p style={{ fontFamily: "HK Grotesk", textAlign: "center" }}>
                <b>No more movies found, try to change the search.</b>
              </p>
            ) : (
              ""
            )
          }
        >
          {searchedMovies &&
            searchedMovies.map((item, index) => (
              <MovieCard key={index} {...item} />
            ))}
          {isSearchLoading && <LoadingSpinner />}
          {searchError && <span>{searchError}</span>}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = ({
  isSearchLoading,
  searchedMovies,
  searchError,
  searchPhrase,
  totalResults
}) => ({
  isSearchLoading,
  searchedMovies,
  searchError,
  searchPhrase,
  totalResults
});

const mapDispatchToProps = dispatch => ({
  loadNewMovies: searchPhrase => dispatch(searchNewMovies(searchPhrase)),
  loadMoreMovies: searchPhrase => dispatch(searchMoreMovies(searchPhrase))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearchPage);
