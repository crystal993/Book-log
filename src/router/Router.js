import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AddPost from "../pages/posts/AddPost";
import DetailPost from "../pages/posts/DetailPost";
import UpdatePost from "../pages/posts/UpdatePost";
import Login from "../pages/users/Login";
import SignUp from "../pages/users/SignUp";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/add" element={<AddPost />}></Route>
      <Route path="/detail/:id" element={<DetailPost />}></Route>
      <Route path="/update/:id" element={<UpdatePost />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
