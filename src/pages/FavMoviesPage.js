import React from "react";
import { connect } from "react-redux";
import MovieCard from "../components/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../components/LoadingSpinner";

function FavMoviesPage({ favouriteMovies, error }) {
  return (
    <div style={{ width: "calc(100% - 230px)", marginTop: "18px" }}>
      <InfiniteScroll
        dataLength={favouriteMovies ? favouriteMovies.size : 0}
        hasMore={false}
        height={window.innerHeight - 86}
        style={{
          margin: "15px 0",
          width: "100%"
        }}
        loader={<LoadingSpinner />}
      >
        {favouriteMovies &&
          favouriteMovies.size > 0 &&
          Array.from(favouriteMovies.values()).map((item, index) => (
            <MovieCard key={index} {...item} />
          ))}
        {error && <span>{error}</span>}
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = ({ favouriteMovies }) => ({
  favouriteMovies
});

export default connect(
  mapStateToProps,
  null
)(FavMoviesPage);
