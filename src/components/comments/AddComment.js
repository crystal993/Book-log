import React from "react";
import axios from "axios";
import styled from "styled-components";
import useInput from "../hooks/useInput";

function AddComment({ user }) {
  const [comment, setComment, commentHandler] = useInput();

  const onSubmit = () => {
    axios({
      method: "post",
      url: `http://localhost:5002/add_comments`,
      data: {
        nickname: user.nickname,
        comment: comment,
      },
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={comment} name="comment" onChange={commentHandler} />
        <button>등록</button>
      </form>
    </>
  );
}

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default AddComment;
