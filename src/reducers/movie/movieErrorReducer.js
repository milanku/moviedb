import { MOVIES } from "../../constants";

const movieErrorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.DETAIL_FETCH:
    case MOVIES.DETAIL_FETCH_SUCCESS:
      return null;
    case MOVIES.DETAIL_FETCH_FAIL:
      return action.error;
    default:
      return state;
  }
};

export default movieErrorReducer;
