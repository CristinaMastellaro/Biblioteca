import { Action } from "@reduxjs/toolkit";

const initialState = {
  totalBooks: {
    code: {
      title: "",
      author: "",
      numPages: 0,
      genre: "",
      published: 0,
      code: "",
      editor: "",
      type: "",
      hashtag: [],
      note: "",
      thoughts: "",
      price: 0,
      dateYouBought: "",
    },
  },
};

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        // totalBooks: { ...state.totalBooks, code: action.payload },
      };
  }
};

export default mainReducer;
