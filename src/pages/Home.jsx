import React from "react";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import CardList from "../components/main/CardList2";

function Home() {
  return (
    <Layout>
      <Header></Header>
      <CardList />
    </Layout>
  );
}

export default Home;
