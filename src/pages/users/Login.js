import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/LoginLayout";
import styled from "styled-components";
import LoginForm from "../../components/user/LoginForm";

function Login() {
  const navigate = useNavigate();
  const color = (props) => props.theme.subColor;
  return (
    <Layout>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        BOOK.LOG
      </Logo>
      <LoginForm></LoginForm>
      <SignUpLink
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sing Up
      </SignUpLink>
    </Layout>
  );
}

const Logo = styled.h1`
  font-size: 44px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  cursor: pointer;
`;

const SignUpLink = styled.p`
  color: white;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;

export default Login;
