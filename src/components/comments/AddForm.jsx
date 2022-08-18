import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../common/Button";

function AddForm({ post }) {
  const { id } = useParams(); //postId
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { isDirty, errors },
  } = useForm({
    mode: "onChange",
  });

  // const postId = post?.postid;

  const onSubmitHandler = (formData, e) => {
    e.preventDefault();
    dispatch(
      __addComment({
        postId: id,
        comment: formData.comment,
      })
    );
    reset();
  };

  useEffect(() => {
    setFocus("comment");
  }, [setFocus]);

  return (
    <>
      <Container>
        <h2>댓글</h2>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Textarea
            required
            type="text"
            placeholder={"댓글을 입력해주세요. (5-100자)"}
            name="comment"
            aria-invalid={
              !isDirty ? undefined : errors.comment ? "true" : "false"
            }
            {...register("comment", {
              required: "댓글은 필수 입력사항입니다.",
              minLength: {
                value: 10,
                message: "10자 이상 입력해주세요.",
              },
              maxLength: {
                value: 105,
                message: "100자 이하 입력해주세요.",
              },
            })}
          />

          <ButtonBox>
            <ErrorMsg>
              {errors.comment && (
                <small role="alert">{errors.comment.message}</small>
              )}
            </ErrorMsg>
            <Button type="submit" content={"등록"}></Button>
          </ButtonBox>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 50px auto;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #d5d0d0;
  margin: 15px 0px;
  border-radius: 5px;
  resize: none;
  background-color: transparent;
  font-size: large;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: -20px;
`;

const ErrorMsg = styled.div`
  width: 70%;
  color: ${(props) => props.theme.errorTextColor};
`;

export default AddForm;
