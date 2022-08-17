import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URI = {
  BASE: process.env.REACT_APP_COMMENT_URI,
};

// 상세 페이지 게시물 가져오기
// /api/readPost/{postId}
//   url: `http://3.39.229.105/api/post/${arg.id}`,
export const __getPost = createAsyncThunk("GET_POST", async (arg, thunkAPI) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:5002/detail_comment_list`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.code);
  }
});

const initialState = {
  postList: [],
  post: {},
  isLoading: false,
  error: null,
};

export const postSlice2 = createSlice({
  name: "post2",
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 조회
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = { ...state.post, ...action.payload };
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice2.reducer;
