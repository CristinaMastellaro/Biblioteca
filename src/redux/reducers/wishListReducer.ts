import ActionWish from "../../types/ActionWish";
import WishedBook from "../../types/WishedBook";
import {
  ADD_TO_WISH_LIST,
  ALL_BOOKS_WISH_LIST,
  REMOVE_FROM_WISH_LIST,
} from "../actions";

const initialState: WishedBook[] = [];

const wishListReducer = (state = initialState, action: ActionWish) => {
  switch (action.type) {
    case ALL_BOOKS_WISH_LIST:
      state = initialState;
      return state.concat(action.payload);
    case ADD_TO_WISH_LIST:
      return state.concat(action.payload);
    case REMOVE_FROM_WISH_LIST:
      return state.filter((b) => b.title != action.payload.title);
    default:
      return state;
  }
};

export default wishListReducer;
