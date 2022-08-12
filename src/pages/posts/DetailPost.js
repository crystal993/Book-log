import React from "react";
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import Layout from "../../components/common/Layout";
import DetailInfo from "../../components/posts/DetailInfo";

function DetailPost() {
  return (
    <Layout>
      <DetailInfo />
      <AddComment />
      <CommentList />
    </Layout>
  );
}

export default DetailPost;
