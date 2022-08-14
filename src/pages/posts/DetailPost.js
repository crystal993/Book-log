import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddForm from "../../components/comments/AddForm";
import Comments from "../../components/comments/Comments";
import Layout from "../../components/common/Layout";
import DetailInfo from "../../components/posts/DetailInfo";
import Header from "../../components/common/Header";
import { useSelector, useDispatch } from "react-redux";
import { __getCommentsList } from "../../redux/modules/commentSlice";

function DetailPost() {
  // const dispatch = useDispatch();
  const { id } = useParams(); //postId임
  const [post, setPost] = useState();
  // api/post/{postId}
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5002/detail_comment_list`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // 데이터 서버에서 어떻게 내려주냐에 따라서 또 달라질듯
        setPost(res.data[0]);
      })
      .catch((err) => {});
    // setUser(response.data);
    return () => {};
  }, []);
  return (
    <Layout>
      <Header />
      <DetailInfo post={post} />
      <AddForm post={post} />
      <Comments post={post} />
    </Layout>
  );
}

export default DetailPost;
