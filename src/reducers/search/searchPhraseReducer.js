import { MOVIES } from "../../constants";

const searchPhraseReducer = (state = "", action) => {
  switch (action.type) {
    case MOVIES.SEARCH_FETCH_NEW:
      return action.searchPhrase;
    default:
      return state;
  }
};

export default searchPhraseReducer;
