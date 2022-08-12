import React, { useEffect, useState } from "react";
import axios from "axios";
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import Layout from "../../components/common/Layout";
import DetailInfo from "../../components/posts/DetailInfo";

function DetailPost() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5002/user_nickname`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
    // setUser(response.data);
    return () => {};
  }, []);
  return (
    <Layout>
      <DetailInfo user={user} />
      <AddComment user={user} />
      <CommentList />
    </Layout>
  );
}

export default DetailPost;
