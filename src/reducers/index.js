import { combineReducers } from "redux";

import searchMoviesReducer from "./search/searchMoviesReducer";
import searchLoadingReducer from "./search/searchLoadingReducer";
import searchErrorReducer from "./search/searchErrorReducer";
import searchPageReducer from "./search/searchPageReducer";
import searchPhraseReducer from "./search/searchPhraseReducer";
import totalResultsReducer from "./search/totalResultsReducer";

import movieDetailReducer from "./movie/movieDetailReducer";
import movieLoadingReducer from "./movie/movieLoadingReducer";
import movieErrorReducer from "./movie/movieErrorReducer";

import favouritesMoviesReducer from "./favourites/favouritesMoviesReducer";

const reducer = combineReducers({
  searchedMovies: searchMoviesReducer,
  isSearchLoading: searchLoadingReducer,
  searchError: searchErrorReducer,
  nextSearchPage: searchPageReducer,
  searchPhrase: searchPhraseReducer,
  totalResults: totalResultsReducer,

  movieDetail: movieDetailReducer,
  movieLoading: movieLoadingReducer,
  movieError: movieErrorReducer,

  favouriteMovies: favouritesMoviesReducer
});

export default reducer;
