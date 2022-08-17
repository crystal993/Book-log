import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URI = {
  BASE: process.env.REACT_APP_COMMENT_URI,
};

// 댓글 리스트 가져오기
// /api/readPost/{postId}
export const __getCommentsList = createAsyncThunk(
  "GET_COMMENTS_LIST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:5002/detail_comment_list`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return thunkAPI.fulfillWithValue(data[0].commentResponseDtoList);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 댓글 작성
export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${URI.BASE}/api/comment`,
        data: arg,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 삭제
// /api/auth/post/{postId}/{commentId}
export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:5002/add_comments/${arg}`,
      });
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 댓글 수정
// /api/auth/post/{postId}/{commentId}
export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      axios({
        method: "put",
        url: `http://localhost:5002/add_comments/${arg.id}`,
        data: arg,
      });
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  commentList: [],
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 조회
    [__getCommentsList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentsList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentList = [...state.commentList, ...action.payload];
    },
    [__getCommentsList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      // 삭제할 댓글의 index를 target에 저장, idx != id
      const target = state.commentList.findIndex(
        (comment) => comment.id === action.payload
      );
      // index를 가진 댓글을 1개 삭제
      state.commentList.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {},
    [__updateComment.fulfilled]: (state, action) => {
      const target = state.commentList.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentList.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: () => {},
    // 댓글 추가
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentList.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
