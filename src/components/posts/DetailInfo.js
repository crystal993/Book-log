import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import axios from "axios";

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

function DetailInfo({ post }) {
  console.log(post);
  const { id } = useParams();
  const post_id = id;
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // /api/auth/post/{postId}
  const onDeleteHandler = async () => {
    const { data } = await axios({
      method: "delete",
      url: `http://3.39.229.105/api/auth/post/${post_id}`,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        RefreshToken: localStorage.getItem("refreshToken"),
        "Content-Type": "application/json",
      },
    });
  };
  // localStorage에서 저장되어있는 userInfo 정보를 꺼내서
  // 내 닉네임과 localStorage 닉네임이 일치하는지
  // const userInfo = localStorage.getItem("userInfo");
  // if (!userInfo?.nickname || !post?.nickname) {
  //   if (userInfo?.nickname === post?.nickname) {
  //     setAccess(true);
  //   }
  // }
  return (
    <>
      <Container>
        닉네임 : {post?.nickname}
        <Image></Image>
        <h3>도서명: {post?.bookTitle}</h3>
        <h3>저자: {post?.author}</h3>
        <h3>제목: {post?.title}</h3>
        <h3>감상평: {post?.content}</h3>
        <ButtonBox>
          <Button
            content={"수정"}
            onClick={() => {
              navigate(`/update/${post_id}`);
            }}
          ></Button>
          <Button
            content={"삭제"}
            onClick={() => {
              onDeleteHandler();
            }}
          ></Button>
        </ButtonBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.image``;

export default DetailInfo;
