import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { nickCheck, passwordCheck, idCheck } from "../../shared/regex";
import styled from "styled-components";
import axios from "axios";
import RESP from "../../server/response";
import Modal from "../common/Modal";

axios.defaults.withCredentials = true;

function SignUpForm() {
  const [openModal, setOpenModal] = useState(false);
  const [msg, setMsg] = useState("");
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

  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };

  const inputRef = useRef(null);
  const onChangeImg = async (e) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      console.log(uploadFile);
      // const formData = new FormData();
      // formData.append("file", uploadFile);

      // await axios({
      //   method: "post",
      //   url: "/api/files/images",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    }
  };

  // TODO result를 data로 바꾸기
  // TODO 시간되면 alert를 모달로 바꾸기
  // TODO axios 밑의 링크로 교체
  // ${URI.BASE}/api/user/signup
  // http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg
  // http://localhost:5002/user_list
  const onSubmitHandler = async (fdata) => {
    console.log(fdata);
    // const result = RESP.SIGN_UP_SUCCESS.result;

    const file = watch("imageUrl");
    // const dto = {
    //   dto: {
    //     account: fdata.account,
    //     password: fdata.password,
    //     passwordCheck: fdata.passwordCheck,
    //     nickname: fdata.nickname,
    //   },
    // };
    // const fd = new FormData();
    // fd.append("dto", dto.dto);
    // fd.append("file", file[0]);
    // for (var item of fd.entries()) {
    //   console.log(item[0] + " : " + item[1]);
    // }

    const fd = new FormData();
    fd.append("account", fdata.account);
    fd.append("password", fdata.password);
    fd.append("passwordCheck", fdata.passwordCheck);
    fd.append("nickname", fdata.nickname);
    fd.append("imageUrl", file[0]);
    const { data } = await axios({
      method: "post",
      url: `http://15.164.218.57/api/user/signup`,
      data: fd,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // TODO ~~닉네임님 환영합니다!
    // alert(JSON.stringify(data));
    navigate("/");
  };

  const onIdCheckHandler = async (formData) => {
    // const { data } = await axios({
    //   method: "get",
    //   url: `${URI.BASE}/api/user/idCheck/${formData.account}`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    const result = RESP.ID_CHECK_SUCCESS.result;
    if (result) {
      setMsg("사용가능한 아이디 입니다.");
    } else {
      setMsg("존재하는 아이디 입니다.");
    }
    return result;
  };

  const onNickCheckHandler = async (formData, e) => {
    // const { data } = await axios({
    //   method: "get",
    //   url: `${URI.BASE}/api/user/nicnameCheck/${formData.nickname}`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const result = RESP.NICKNAME_CHECK_SUCCESS.result;
    if (result) {
      setMsg("사용가능한 닉네임 입니다.");
    } else {
      setMsg("존재하는 닉네임 입니다.");
    }
    return result;
  };

  // useEffect(() => {
  //   setFocus("account");
  // }, []);

  //TODO 회원가입 기능, 아이디 중복, 닉네임 중복체크
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
                validate: (value) => {
                  const result = idCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"아이디는 숫자 또는 영문으로 6~12자 이내입니다."}
                      </ErrorMsg>
                    );
                  }
                  // else {
                  //   return (
                  //     <CorrectMsg>
                  //       {"조건에 일치하는 아이디 형식 입니다."}
                  //     </CorrectMsg>
                  //   );
                  // }
                },
              })}
            />
            <Button
              content={"check"}
              onClick={() => {
                onIdCheckHandler();
                // console.log(result);
                // setOpenModal(result);
              }}
            />
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
                  }
                  // else {
                  //   return (
                  //     <CorrectMsg>
                  //       {"조건에 일치하는 비밀번호 형식 입니다."}
                  //     </CorrectMsg>
                  //   );
                  // }
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
                  }
                  // else if (
                  //   watch("password") === value &&
                  //   value.length !== 0
                  // ) {
                  //   return <CorrectMsg>{"비밀번호가 일치합니다"}</CorrectMsg>;
                  // }
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
                  }
                  // else {
                  //   return (
                  //     <CorrectMsg>
                  //       {"조건에 일치하는 닉네임 형식입니다."}
                  //     </CorrectMsg>
                  //   );
                  // }
                },
              })}
            />
            {/* value: /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]^{3,8}/i, */}
            <Button
              content={"check"}
              onClick={() => {
                onNickCheckHandler();
              }}
            />
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
              ref={inputRef}
              onChange={onChangeImg}
              placeholder="이미지 파일"
              {...register("imageUrl", {})}
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
        <Button content={"회원가입"} type="submit" />
      </Form>
      {/* {openModal && <Modal msg={msg} />} */}
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
