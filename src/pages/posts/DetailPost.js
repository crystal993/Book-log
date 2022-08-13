import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "../../components/comments/CommentForm";
import Comments from "../../components/comments/Comments";
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
      <CommentForm user={user} />
      <Comments />
    </Layout>
  );
}

export default DetailPost;
