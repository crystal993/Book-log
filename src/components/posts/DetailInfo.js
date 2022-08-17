import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

function DetailInfo({ post }) {
  const { id } = useParams();
  const post_id = id;
  const navigate = useNavigate();
  return (
    <>
      닉네임 : {post?.nickname}
      <Button
        content={"수정"}
        onClick={() => {
          navigate(`/update/${post_id}`);
        }}
      ></Button>
      <Button content={"삭제"}></Button>
    </>
  );
}

export default DetailInfo;
