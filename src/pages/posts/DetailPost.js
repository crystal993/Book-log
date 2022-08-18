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
  // const posting = useSelector((state) => state.post2.post);
  // console.log(posting);
  const { id } = useParams(); //postId임
  const post_id = id;
  console.log(id);
  const [post, setPost] = useState();
  // api/post/{postId}
  useEffect(() => {
    console.log("요청");
    axios({
      method: "get",
      url: `http://3.39.229.105/api/post/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // TODO 데이터 서버에서 어떻게 내려주냐에 따라서 또 달라질듯
        console.log(res);
        setPost(res.data.data);
        console.log(post);
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
