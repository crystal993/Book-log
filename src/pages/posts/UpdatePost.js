import React from "react";
import UpdateForm from "../../components/posts/UpdateForm";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";

function UpdatePost() {
  return (
    <Layout>
      <Header></Header>
      <UpdateForm></UpdateForm>
    </Layout>
  );
}

export default UpdatePost;
