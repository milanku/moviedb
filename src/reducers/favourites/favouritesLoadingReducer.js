import { MOVIES } from "../../constants";

const favouritesLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case MOVIES.FAVOURITES_FETCH:
    case MOVIES.FAVOURITES_LOAD_STORAGE:
      return true;
    case MOVIES.FAVOURITES_FETCH_FAIL:
    case MOVIES.FAVOURITES_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default favouritesLoadingReducer;
