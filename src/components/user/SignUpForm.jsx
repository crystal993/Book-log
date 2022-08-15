import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";

function SignUpForm() {
  const { id } = useParams(); //postId
  const navigate = useNavigate();
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

  const onSubmitHandler = async (formData) => {};

  useEffect(() => {
    setFocus("account");
  }, []);

  return (
    <SignUpView>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Title>Sign Up</Title>
        <Container>
          <Label>ID</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="아이디"
              {...register("account", {
                required: "아이디는 필수 입력사항입니다.",
              })}
            />
            <Button content={"check"} />
          </InputBox>
          <ButtonBox>
            <ErrorMsg>
              {errors.account && (
                <small role="alert">{errors.userid.message}</small>
              )}
            </ErrorMsg>
          </ButtonBox>
          <Label>PW</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호는 필수 입력사항입니다.",
              })}
            />
          </InputBox>
          <ButtonBox>
            <ErrorMsg>
              {errors.password && (
                <small role="alert">{errors.password.message}</small>
              )}
            </ErrorMsg>
          </ButtonBox>
          <Label>PW CHECK</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="비밀번호"
              {...register("passwordCheck", {
                required: "비밀번호는 필수 입력사항입니다.",
              })}
            />
          </InputBox>
          <ButtonBox>
            <ErrorMsg>
              {errors.passwordCheck && (
                <small role="alert">{errors.passwordCheck.message}</small>
              )}
            </ErrorMsg>
          </ButtonBox>
          <Label>NICKNAME</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="닉네임"
              {...register("nickname ", {
                required: "닉네임은 필수 입력사항입니다.",
              })}
            />
            <Button content={"check"} />
          </InputBox>
          <ButtonBox>
            <ErrorMsg>
              {errors.passwordCheck && (
                <small role="alert">{errors.nickname.message}</small>
              )}
            </ErrorMsg>
          </ButtonBox>
          <Label>IMAGE URL</Label>
          <InputBox>
            <Input
              type="file"
              accept="image/*"
              placeholder="이미지 파일"
              {...register("imageUrl ", {})}
            />
          </InputBox>
          <ButtonBox>
            <ErrorMsg>
              {errors.passwordCheck && (
                <small role="alert">{errors.imageUrl.message}</small>
              )}
            </ErrorMsg>
          </ButtonBox>
        </Container>
        <Button type="submit" content={"회원가입"} />
      </Form>
    </SignUpView>
  );
}

export default SignUpForm;

const SignUpView = styled.div`
  width: 40%;
  border-radius: 10px;
  background-color: #ffffff;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.subColor};
  font-size: 26px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px auto;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  background-image: url();
  border: 1px solid #d5d0d0;
  margin: 15px 0px;
  border-radius: 5px;
  resize: none;
  background-color: transparent;
  font-size: large;
  padding: 10px;
  text-indent: 5px;
  background-position: 0px center;
  background-size: contain;
  background-repeat: no-repeat;
  &:focus {
    background-position: 0px center;
    outline: none;
  }
  &::placeholder {
    color: #eae0e0;
  }
`;

const Icon = styled.div`
  color: #d5d0d0;
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

const Label = styled.label`
  color: ${({ theme }) => theme.subColor};
`;
