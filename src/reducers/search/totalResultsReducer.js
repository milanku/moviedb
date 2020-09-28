import { MOVIES } from "../../constants";

const totalResultsReducer = (state = 0, action) => {
  switch (action.type) {
    case MOVIES.SEARCH_FETCH_SUCCESS:
      return action.movies.totalResults;
    default:
      return state;
  }
};

export default totalResultsReducer;
