import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { nickCheck, passwordCheck, idCheck } from "../../shared/regex";

function SignUpForm() {
  const { id } = useParams(); //postId
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    watch,
    formState: { isDirty, errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = async (formData) => {};

  const onIdCheckHandler = async (formData) => {};

  const onNickCheckHandler = async (formData) => {};

  useEffect(() => {
    setFocus("account");
  }, []);

  //TODO 회원가입 기능, 아이디 중복, 닉네임 중복체크
  return (
    <SignUpView>
      <Form
        onSubmit={handleSubmit(
          onSubmitHandler,
          onIdCheckHandler,
          onNickCheckHandler
        )}
      >
        <Title>Sign Up</Title>
        <Container>
          <Label>ID</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="아이디"
              {...register("account", {
                required: "아이디는 필수 입력사항입니다.",
                validate: (value) => {
                  const result = idCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"아이디는 숫자 또는 영문으로 6~12자 이내입니다."}
                      </ErrorMsg>
                    );
                  } else {
                    return (
                      <CorrectMsg>
                        {"조건에 일치하는 아이디 형식 입니다."}
                      </CorrectMsg>
                    );
                  }
                },
              })}
            />
            <Button content={"check"} />
          </InputBox>
          <ButtonBox>
            <MsgBox>
              {errors.account && <ErrorMsg>{errors.account.message}</ErrorMsg>}
            </MsgBox>
          </ButtonBox>
          <Label>PW</Label>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호는 필수 입력사항입니다.",
                validate: (value) => {
                  const result = passwordCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"비밀번호는 숫자 또는 영문으로 6~12자 이내입니다."}
                      </ErrorMsg>
                    );
                  } else {
                    return (
                      <CorrectMsg>
                        {"조건에 일치하는 비밀번호 형식 입니다."}
                      </CorrectMsg>
                    );
                  }
                },
              })}
            />
          </InputBox>
          <ButtonBox>
            <MsgBox>
              {errors.password && (
                <ErrorMsg>{errors.password.message}</ErrorMsg>
              )}
            </MsgBox>
          </ButtonBox>
          <Label>PW CHECK</Label>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호"
              {...register("passwordCheck", {
                required: "비밀번호는 필수 입력사항입니다.",
                validate: (value) => {
                  const result = passwordCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"비밀번호는 숫자 또는 영문으로 6~12자 이내입니다."}
                      </ErrorMsg>
                    );
                  } else if (watch("password") !== value) {
                    return (
                      <ErrorMsg>{"비밀번호가 일치하지 않습니다."}</ErrorMsg>
                    );
                  } else if (
                    watch("password") === value &&
                    value.length !== 0
                  ) {
                    return <CorrectMsg>{"비밀번호가 일치합니다"}</CorrectMsg>;
                  }
                },
              })}
            />
          </InputBox>
          <ButtonBox>
            <MsgBox>
              {errors.passwordCheck && (
                <ErrorMsg>{errors.passwordCheck.message}</ErrorMsg>
              )}
            </MsgBox>
          </ButtonBox>
          <Label>NICKNAME</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="닉네임"
              {...register("nickname", {
                required: "닉네임은 필수 입력사항입니다.",
                validate: (value) => {
                  const result = nickCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {
                          "닉네임은 특수문자를 제외한 문자, 숫자로 3~8자 이내입니다."
                        }
                      </ErrorMsg>
                    );
                  } else {
                    return (
                      <CorrectMsg>
                        {"조건에 일치하는 닉네임 형식입니다."}
                      </CorrectMsg>
                    );
                  }
                },
              })}
            />
            {/* value: /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]^{3,8}/i, */}
            <Button content={"check"} />
          </InputBox>
          <ButtonBox>
            <MsgBox>
              {errors.nickname && (
                <ErrorMsg>{errors.nickname.message}</ErrorMsg>
              )}
            </MsgBox>
          </ButtonBox>
          <Label>PROFILE IMG</Label>
          <InputBox>
            <Input
              type="file"
              accept="image/*"
              placeholder="이미지 파일"
              {...register("imageUrl ", {})}
            />
          </InputBox>
          <ButtonBox>
            <MsgBox>
              {errors.imageUrl && (
                <ErrorMsg>{errors.imageUrl.message}</ErrorMsg>
              )}
            </MsgBox>
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

const MsgBox = styled.div`
  margin-top: -20px;
  margin-bottom: 10px;
  height: 50px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.subColor};
`;

const CorrectMsg = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.mainColor};
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.errorTextColor};
`;
