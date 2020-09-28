import { MOVIES } from "../../constants";

const favouritesMoviesReducer = (state = new Map(), action) => {
  switch (action.type) {
    case MOVIES.FAVOURITES_SET:
      return action.movies;
    case MOVIES.FAVOURITES_ADD: {
      const { movie } = action;
      let newMap = new Map(state);
      newMap.set(movie.imdbID, movie);
      return newMap;
    }
    case MOVIES.FAVOURITES_DELETE: {
      const { movie } = action;
      let newMap = new Map(state);
      newMap.delete(movie.imdbID);
      return newMap;
    }

    default:
      return state;
  }
};

export default favouritesMoviesReducer;
