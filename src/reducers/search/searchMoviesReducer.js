import { MOVIES } from "../../constants";

const searchMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case MOVIES.SEARCH_FETCH_NEW:
      return [];
    case MOVIES.SEARCH_FETCH_SUCCESS:
      return [...state, ...action.movies.movies];

    default:
      return state;
  }
};

export default searchMoviesReducer;
