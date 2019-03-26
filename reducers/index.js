import { GET_DECK } from "../actions/index";
import initialData from "../utils/api";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DECK:
      return {
        ...state,
        ...action.decks
      };
  }
};
