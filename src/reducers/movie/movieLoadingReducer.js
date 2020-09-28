import { MOVIES } from "../../constants";

const movieLoadingReducer = (state = true, action) => {

  switch (action.type) {
    case MOVIES.DETAIL_FETCH:
      return true;
    case MOVIES.DETAIL_FETCH_SUCCESS:
    case MOVIES.DETAIL_FETCH_FAIL:
      return false;
    default:
      return state;
  }
};

export default movieLoadingReducer;
