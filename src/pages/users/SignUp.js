import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/SignUpLayout";
import styled from "styled-components";
import SignUpForm from "../../components/user/SignUpForm";

function SignUp() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        BOOK.LOG
      </Logo>
      <SignUpForm></SignUpForm>
      <LoginLink
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </LoginLink>
    </Layout>
  );
}

export default SignUp;

const Logo = styled.h1`
  font-size: 44px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  cursor: pointer;
`;

const LoginLink = styled.p`
  color: white;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;
