import { MOVIES } from "../../constants";

const searchLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case MOVIES.SEARCH_FETCH_NEW:
    case MOVIES.SEARCH_FETCH_MORE:
      return true;
    case MOVIES.SEARCH_FETCH_SUCCESS:
    case MOVIES.SEARCH_FETCH_FAIL:
      return false;
    default:
      return state;
  }
};

export default searchLoadingReducer;
