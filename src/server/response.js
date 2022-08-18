// response.js

const RESP = {
  // for user realted APIs
  LOGIN_SUCCESS: {
    result: true,
    data: {
      account: "zintest1",
      nickname: "nickname",
      accessToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aW50ZXN0MSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2MDczNjQ0Nn0.xlE8yYp6tCms0aBfAe7DG0O4-GL5IlaaEozJBucKRto",
      refreshToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjEzMzk0NDZ9.NkkZ2heZ8pTyuvVRwqf7j4ktBV4_TFuhU9DLb8W_kiU",
      imageUrl: "Server-pang-1660734640405.jpg",
    },
    message: null,
    error: null,
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
