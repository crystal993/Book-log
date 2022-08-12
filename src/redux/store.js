import { combineReducers, configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import comment from "./modules/commentSlice";
import comments from "./modules/commentsSlice";
import post from "./modules/postSlice";
import posts from "./modules/postsSlice";
const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
  devTools: false,
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
