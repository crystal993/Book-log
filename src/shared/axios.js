import axios from "axios";

const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const api = axios.create({
  baseURL: `${URI.BASE}`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apis = {
  // article
  add: (contents) => api.post("/api/articles", contents),
  edit: (id, contents) => api.put(`api/articles/${id}`, contents),
  del: (id) => api.delete(`api/articles/${id}`),
  articles: () => api.get("/api/articles"),
  article: (id) => api.get(`/api/articles/${id}`),
  search: (value) => api.get(`/api/articles/search?query=${value}`),

  // comment
  addComment: (id, content) =>
    api.post(`/api/articles/${id}/comments`, { content }),
  comments: (id) => api.get(`/api/articles/${id}/comments`),
  delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
  editComment: (id, coId, content) =>
    api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // user
  login: (id, pw) => api.post("/user/login", { username: id, password: pw }),
  signup: (id, email, pw, pwcheck) =>
    api.post("/user/signup", {
      username: id,
      email: email,
      password: pw,
      repassword: pwcheck,
    }),
  userInfo: () => api.get(`/myinfo`),
  userPassword: (pw) => api.post(`/myinfo`, pw),
  userNewPassword: (pw) => api.put(`/myinfo`, pw),
};
