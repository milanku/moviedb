import React, { Component } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const { Title, Poster, Plot, Actors, Year, imdbID } = this.props;
    return (
      <Link to={`/movie/${imdbID}`} className={styles.link}>
        <div className={styles.container}>
          <img className={styles.moviePoster} src={Poster} />
          <div className={styles.movieInfo}>
            <h2>{`${Title} (${Year})`}</h2>
            <p>{Plot}</p>
            <p>Starring: {Actors}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default MovieCard;
