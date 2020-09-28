import { MOVIES } from "../../constants";

const movieDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIES.DETAIL_FETCH_SUCCESS:
      return {
        ...action.movie
      };
    case MOVIES.DETAIL_FETCH:
      return {};

    default:
      return state;
  }
};

export default movieDetailReducer;
