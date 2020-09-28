import { put, call, takeEvery, select, takeLatest } from "redux-saga/effects";
import { MOVIES } from "../constants";
import {
  fetchMoviesByPhrase,
  fetchMovieByID,
  fetchMoviesByIDs as fetchFavouritesFun
} from "../apis/moviesFetchHandler";
import {
  saveFavouriteMovie,
  deleteFavouriteMovie,
  getFavourites
} from "../apis/moviesStorageHandler";
import {
  setSearchMovies,
  setMovieDetail,
  setMovieDetailError,
  setSearchError,
  setFavourites,
  fetchFavourites
} from "../actions";

const getPage = state => state.nextSearchPage;

function* handleSearchFetch({ searchPhrase }) {
  try {
    const page = yield select(getPage);
    const movies = yield call(fetchMoviesByPhrase, page, searchPhrase);
    yield put(setSearchMovies(movies));
  } catch (error) {
    yield put(setSearchError(error.toString()));
  }
}

function* handleMovDetailFetch({ id }) {
  try {
    const movie = yield call(fetchMovieByID, id);
    yield put(setMovieDetail(movie));
  } catch (error) {
    yield put(setMovieDetailError(error.toString()));
  }
}

function* handleFavAdd({ movie }) {
  yield call(saveFavouriteMovie, movie.imdbID);
}

function* handleFavDelete({ movie }) {
  yield call(deleteFavouriteMovie, movie.imdbID);
}

function* handleFavsLoad() {
  const favouriteMoviesIDs = yield call(getFavourites);
  yield put(fetchFavourites(favouriteMoviesIDs));
}

function* handleFavsFetch({ ids }) {
  const favouriteMovies = yield call(fetchFavouritesFun, ids);
  yield put(setFavourites(favouriteMovies));
}

//watcher
function* rootSaga() {
  yield takeEvery(MOVIES.SEARCH_FETCH_NEW, handleSearchFetch);
  yield takeEvery(MOVIES.SEARCH_FETCH_MORE, handleSearchFetch);

  yield takeEvery(MOVIES.DETAIL_FETCH, handleMovDetailFetch);

  yield takeEvery(MOVIES.FAVOURITES_ADD, handleFavAdd);
  yield takeEvery(MOVIES.FAVOURITES_DELETE, handleFavDelete);
  yield takeLatest(MOVIES.FAVOURITES_LOAD_STORAGE, handleFavsLoad);
  yield takeLatest(MOVIES.FAVOURITES_FETCH, handleFavsFetch);
}

export default rootSaga;
