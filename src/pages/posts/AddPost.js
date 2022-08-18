import React from "react";
import AddForm from "../../components/posts/AddForm";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";

function AddPost() {
  return (
    <Layout>
      <Header></Header>
      <AddForm></AddForm>
    </Layout>
  );
}

export default AddPost;
