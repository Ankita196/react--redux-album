import { ActionTypes } from "../constants/action-types";
const intialState = {
  albums: [],
};

export const albumsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALBUMS:
      return { ...state, albums: payload };
    default:
      return state;
  }
};

