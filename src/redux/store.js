import { combineReducers, configureStore } from "@reduxjs/toolkit";
import comment from "./modules/commentSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";
const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
  comment,
  devTools: false,
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares, logger],
});

export default store;
