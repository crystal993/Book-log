import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import RESP from "../../server/response";
const initialState = {
  isLogin: localStorage.getItem("accessToken") ? true : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
