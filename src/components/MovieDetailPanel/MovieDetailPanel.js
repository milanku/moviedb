import React, { Component } from "react";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import { addFavourite, deleteFavourite } from "../../actions";

class MovieDetailPanel extends Component {
  changeFavouriteStatus = () => {
    const { favouriteMovies, movie } = this.props;
    favouriteMovies.has(movie.imdbID)
      ? this.props.deleteFavourite(movie)
      : this.props.addFavourite(movie);
  };

  render() {
    const {
      Title,
      Genre,
      Poster,
      Plot,
      Year,
      Actors,
      Ratings,
      imdbID
    } = this.props.movie;
    const { favouriteMovies } = this.props;

    return (
      <div className={styles.container}>
        <img className={styles.poster} src={Poster} />
        <div className={styles.infoBoard}>
          <h1>
            {`${Title} (${Year})`}{" "}
            <i
              className={`fa-star ${styles.star} ${
                favouriteMovies.has(imdbID) ? `fas ${styles.favourite}` : "far"
              }`}
              onClick={this.changeFavouriteStatus}
            ></i>
          </h1>
          <p className={styles.genre}>{Genre}</p>
          <p>{Plot}</p>
          <p>{`Starring: ${Actors}`}</p>
          <div className={styles.scores}>
            {Ratings.map((item, index) => (
              <div key={index} className={styles.scoresItem}>
                <span>{item.Source}</span>
                <span>{item.Value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ favouriteMovies }) => ({
  favouriteMovies
});

const mapDispatchToProps = dispatch => ({
  addFavourite: movie => dispatch(addFavourite(movie)),
  deleteFavourite: movie => dispatch(deleteFavourite(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailPanel);
