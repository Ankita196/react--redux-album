import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";
const reducers = combineReducers({
  allAlbums: albumsReducer,
 
});
export default reducers;