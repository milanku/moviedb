import { MOVIES } from "../../constants";

const searchPageReducer = (state = 1, action) => {
  switch (action.type) {
    case MOVIES.SEARCH_FETCH_NEW:
      return 1;
    case MOVIES.SEARCH_FETCH_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export default searchPageReducer;
