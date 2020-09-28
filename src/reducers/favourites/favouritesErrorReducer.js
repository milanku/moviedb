import { MOVIES } from "../../constants";

const favouritesErrorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.FAVOURITES_FETCH_FAIL:
      return action.error;
    case MOVIES.FAVOURITES_FETCH:
    case MOVIES.FAVOURITES_FETCH_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default favouritesErrorReducer;
