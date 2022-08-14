import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import styled from "styled-components";

function CardList() {
  const [postList, setPostList] = useState([]);

  // api/post
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5002/post_list`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setPostList([...res.data.data]);
      })
      .catch((err) => {});
    return () => {};
  }, []);
  return (
    <Container>
      {postList.map((post) => {
        return (
          <Fragment key={post.postid}>
            <Card key={post.postid} post={post} />
          </Fragment>
        );
      })}
    </Container>
  );
}

export default CardList;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 10px;
`;
