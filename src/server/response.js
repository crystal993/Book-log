// response.js

const RESP = {
  // for user realted APIs
  LOGIN_HEADER: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYWFhYWEiLCJhdXRoIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE2NjA3Mzc5NjF9.GWne8LvzFYiEqTmU6bS0NJ1E8GWQuQxeerOMVNV2FiU",
    RefreshToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA5Nzc3NjB9.sLdXvDFyE_YFyUr_rkX9LBPJSFWnyGQv39p0tkE2xD0",
  },
  LOGIN_SUCCESS: {
    result: true,
    data: {
      id: 1,
      username: "crystal",
      nickname: "helllo_world",
      createdAt: "2022-08-15T15:42:37.493339",
      modifiedAt: "2022-08-15T15:42:37.493339",
    },
    status: {
      code: 200,
      message: "successfullly logged in.",
    },
  },
  LOGIN_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "login failed.",
    },
  },
  LOGOUT_SUCCESS: {
    result: true,
    data: null,
    status: {
      code: 200,
      message: "successfullly logged out.",
    },
  },
  LOGOUT_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "logout failed.",
    },
  },
  ID_CHECK_SUCCESS: {
    result: true,
    data: true,
    status: {
      code: 200,
      message: "You can use this ID.",
    },
  },
  ID_CHECK_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "This ID is already exist. Please try other ID.",
    },
  },
  NICKNAME_CHECK_SUCCESS: {
    result: true,
    data: true,
    status: {
      code: 200,
      message: "You can use this nickname.",
    },
  },
  NICKNAME_CHECK_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "This nickname is already exist. Please try other nickname.",
    },
  },
  SIGN_UP_SUCCESS: {
    result: true,
    data: {
      id: 1,
      username: "crystal",
      nickname: "helllo_world",
      createdAt: "2022-08-13T15:42:37.493339",
      modifiedAt: "2022-08-13T15:42:37.493339",
    },
    status: {
      code: 200,
      message: "successfully signed in.",
    },
  },
  SIGN_UP_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "sigin failed.",
    },
  },

  // POST APIS
  ADD_POST_SUCCESS: {
    result: true,
    message: "작성이 완료되었습니다.",
  },

  ADD_POST_FAIL: {
    result: false,
    error: { code: 500, message: "요청이 실패했습니다." },
  },

  UPDATE_POST_SUCCESS: {
    result: true,
    message: "수정이 완료되었습니다.",
  },

  UPDATE_POST_FAIL: {
    result: false,
    error: { code: 500, message: "요청이 실패했습니다." },
  },
};

export default RESP;
