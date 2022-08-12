import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import AddPost from "../pages/posts/AddPost";
import DetailPost from "../pages/posts/DetailPost";
import UpdatePost from "../pages/posts/UpdatePost";
import Login from "../pages/users/Login";
import SignUp from "../pages/users/SignUp";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/add" element={<AddPost />}></Route>
      <Route path="/detail/:id" element={<DetailPost />}></Route>
      <Route path="/update/:id" element={<UpdatePost />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default Router;
