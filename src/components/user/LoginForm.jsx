import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import RESP from "../../server/response";
import { login } from "../../redux/modules/userSlice";
import axios from "axios";

axios.defaults.withCredentials = true;

function LoginForm() {
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

  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };

  // redirect authenticated user to profile screen
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/");
  //   }
  // }, [navigate, userInfo]);

  // api/user/login
  const onSubmitHandler = async (formData) => {
    // const { result, status: { message } } = await axios.post(`http://localhost:3000/user/login`, formData);
    const response = await axios({
      method: "post",
      url: `http://3.39.229.105/api/user/login`,
      data: formData,
    });
    console.log(response.headers.authorization);
    console.log(response.headers);
    //
    //
    // const {
    //   result,
    //   status: { message },
    // } = RESP.LOGIN_SUCCESS;
    const { authorization, refreshtoken } = response.headers;
    // if (!result) {
    //   alert(message);
    //   return;
    // }
    const { data, result } = response.data;
    localStorage.setItem("userInfo", data);
    localStorage.setItem("accessToken", authorization);
    localStorage.setItem("refreshToken", refreshtoken);
    // dispatch(login());
    navigate("/");
  };

  useEffect(() => {
    setFocus("account");
  }, []);

  return (
    <LoginView>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Title>LOGIN</Title>
        <Input
          required
          type="text"
          placeholder="아이디"
          {...register("account", {
            required: "아이디는 필수 입력사항입니다.",
          })}
        />
        <ButtonBox>
          <ErrorMsg>
            {errors.account && (
              <small role="alert">{errors.account.message}</small>
            )}
          </ErrorMsg>
        </ButtonBox>
        <Input
          required
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수 입력사항입니다.",
          })}
        />
        <ButtonBox>
          <ErrorMsg>
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
          </ErrorMsg>
        </ButtonBox>
        <Button type="submit" content={"로그인"} />
      </Form>
    </LoginView>
  );
}

export default LoginForm;

const LoginView = styled.div`
  width: 40%;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-content: space-around;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  background-image: url();
  width: 60%;
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

const Title = styled.div`
  color: ${({ theme }) => theme.subColor};
  font-size: 26px;
  font-weight: bold;
  margin: 10px;
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
