import { ActionTypes } from "../constants/action-types";

export const setAlbums = (albums) => {
  return {
    type: ActionTypes.SET_ALBUMS,
    payload: albums,
  };
};

