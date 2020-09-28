import { MOVIES } from "../../constants";

const searchErrorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.SEARCH_FETCH_FAIL:
      return action.error;
    case MOVIES.SEARCH_FETCH_NEW:
    case MOVIES.SEARCH_FETCH_MORE:
    case MOVIES.SEARCH_FETCH_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default searchErrorReducer;
