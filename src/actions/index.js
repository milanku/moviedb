import { MOVIES } from "../constants";

// Fetch first page of a new search
const searchNewMovies = searchPhrase => ({
  type: MOVIES.SEARCH_FETCH_NEW,
  searchPhrase
});

// Fetch next pages of a search
const searchMoreMovies = searchPhrase => ({
  type: MOVIES.SEARCH_FETCH_MORE,
  searchPhrase
});

// Movies fetched
const setSearchMovies = movies => ({
  type: MOVIES.SEARCH_FETCH_SUCCESS,
  movies
});

const setSearchError = error => ({
  type: MOVIES.SEARCH_FETCH_FAIL,
  error
});

// Fetch single movie with details
const fetchMovieDetail = id => ({
  type: MOVIES.DETAIL_FETCH,
  id
});

// Single movie fetched
const setMovieDetail = movie => ({
  type: MOVIES.DETAIL_FETCH_SUCCESS,
  movie
});

const setMovieDetailError = error => ({
  type: MOVIES.DETAIL_FETCH_FAIL,
  error
});

// Fetch movies by ids
const fetchFavourites = ids => ({
  type: MOVIES.FAVOURITES_FETCH,
  ids
});

// Load movies from storage
const loadFavouritesIDs = () => ({
  type: MOVIES.FAVOURITES_LOAD_STORAGE
});

const setFavourites = movies => ({
  type: MOVIES.FAVOURITES_SET,
  movies
});

const addFavourite = movie => ({
  type: MOVIES.FAVOURITES_ADD,
  movie
});

const deleteFavourite = movie => ({
  type: MOVIES.FAVOURITES_DELETE,
  movie
});

export {
  searchNewMovies,
  searchMoreMovies,
  setSearchMovies,
  setSearchError,
  fetchMovieDetail,
  setMovieDetail,
  setMovieDetailError,
  loadFavouritesIDs,
  fetchFavourites,
  setFavourites,
  addFavourite,
  deleteFavourite
};
