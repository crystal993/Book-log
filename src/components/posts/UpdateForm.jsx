import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../common/NavButton";

const UpdateForm = () => {
  const { id } = useParams();
  const post_id = id;
  const [post, setPost] = useState();
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    watch,
    setValue,
    formState: { isDirty, errors },
  } = useForm({
    mode: "onChange",
  });
  //
  //input으로 받은 값들
  // Form 입력값 모음
  const [bookInfo, setBookInfo] = useState({
    category: "",
    bookTitle: "",
    author: "",
    title: "",
    content: "",
  });

  // onChange 이벤트가 발생한 target을 받아와 value값을 할당해준다.
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setBookInfo({ ...bookInfo, [name]: value });
  };

  const navigate = useNavigate();

  const file = watch("imageUrl");

  // ${URI.BASE}
  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };

  //::등록 기능
  //TODO 게시글 수정 서버랑 연결 확인해야함.
  const onUpdateHandler = async (formData, e) => {
    const fd = new FormData();
    fd.append("category", formData.category);
    fd.append("bookTitle", formData.bookTitle);
    fd.append("author", formData.author);
    fd.append("title", formData.title);
    fd.append("content", formData.content);
    fd.append("imageUrl", file[0]);
    if (formData.title !== "" || formData.content !== "") {
      const { data } = await axios({
        method: "put",
        url: `http://3.39.229.105/api/auth/post/${post_id}`,
        data: fd,
        headers: {
          Authorization: localStorage.getItem("accessToken"),
          RefreshToken: localStorage.getItem("refreshtoken"),
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      console.log("내용을 입력해주세요");
    }

    navigate(`/detail/${post_id}`);
  };

  // 초기값
  // const initialState = {
  //   id: 0,
  //   title: "",
  //   contents: "",
  //   writer: "",
  // };

  // const [post, setPost] = useState(initialState);
  // 수정 페이지에 기존 정보 가져오기
  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.39.229.105/api/post/${post_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // TODO 데이터 서버에서 어떻게 내려주냐에 따라서 또 달라질듯
        console.log(response);
        setValue("category", response.data.data.category);
        setValue("bookTitle", response.data.data.bookTitle);
        setValue("author", response.data.data.author);
        setValue("title", response.data.data.title);
        setValue("content", response.data.data.content);
        setPost(response.data.data);
      })
      .catch((err) => {});
    // setUser(response.data);
    setFocus("category");
    return () => {};
  }, [setFocus]);
  console.log(post);

  return (
    <UpdateView>
      <Form onSubmit={handleSubmit(onUpdateHandler)}>
        <Title>{post?.nickname}님의 Book Log</Title>
        <Container>
          <Label>카테고리</Label>
          <InputBox>
            <Select size="1" name="category" {...register("category")}>
              <option className="placehd">카테고리를 설정해주세요</option>
              <option value="소설">소설</option>
              <option value="에세이">에세이</option>
              <option value="시">시</option>
              <option value="인문">인문</option>
              <option value="정치사회">정치사회</option>
              <option value="자기개발">자기개발</option>
              <option value="역사문화">역사문화</option>
              <option value="외국어">외국어</option>
            </Select>
          </InputBox>
          <MsgBox></MsgBox>
          <Label>도서명</Label>
          <InputBox>
            <Input
              type="text"
              name="bookTitle"
              placeholder="책제목"
              {...register("bookTitle", {
                required: "책제목은 필수 입력사항입니다.",
              })}
            />
          </InputBox>
          <MsgBox>
            {errors.bookTitle && (
              <ErrorMsg>{errors.bookTitle.message}</ErrorMsg>
            )}
          </MsgBox>
          <Label>저자</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="저자"
              {...register("author", {
                required: "저자는 필수 입력사항입니다.",
              })}
            />
          </InputBox>
          <MsgBox>
            {errors.author && <ErrorMsg>{errors.author.message}</ErrorMsg>}
          </MsgBox>
          <Label>제목</Label>
          <InputBox>
            <Input
              type="text"
              placeholder="제목"
              {...register("title", {
                required: "제목은 필수 입력사항입니다.",
              })}
            />
          </InputBox>
          <MsgBox>
            {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
          </MsgBox>
          <Label>감상평</Label>
          <InputBox>
            <TextArea
              type="textarea"
              multiline={true}
              textAlign="top"
              placeholder={"감상평을 입력해 주세요."}
              name="content"
              {...register("content")}
            />
          </InputBox>
          <InputBox>
            <Input
              type="file"
              accept="image/*"
              placeholder="이미지 파일"
              {...register("imageUrl", {})}
            />
          </InputBox>
          <MsgBox>
            {errors.imageUrl && <ErrorMsg>{errors.imageUrl.message}</ErrorMsg>}
          </MsgBox>
        </Container>
        <ButtonBox>
          <Button content={"게시글 수정"} type="submit" />
          <Button
            content={"이전"}
            onClick={() => {
              navigate(`/detail/${post_id}`);
            }}
          />
        </ButtonBox>
      </Form>
      {/* {openModal && <Modal msg={msg} />} */}
    </UpdateView>
  );
};

export default UpdateForm;

const UpdateView = styled.div`
  width: 60%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor};
  margin: 100px auto;

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
  color: ${({ theme }) => theme.whiteColor};
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

const Select = styled.select`
  width: 100%;
  background-image: url();
  border: 1px solid #d5d0d0;
  margin: 15px 0px;
  border-radius: 5px;
  resize: none;
  background-color: ${({ theme }) => theme.whiteColor};
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
  background-color: ${({ theme }) => theme.whiteColor};
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
  justify-content: center;
  align-items: flex-start;
  margin-right: -20px;
`;

const MsgBox = styled.div`
  margin-top: -20px;
  margin-bottom: 10px;
  height: 50px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.whiteColor};
`;

const CorrectMsg = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.mainColor};
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.errorTextColor};
`;

const InputArea = styled.form`
  background-color: white;
  width: 500px;
  height: 800px;
  display: grid;
  margin: 50px auto;
  padding: 50px;
  @media (max-width: 767px) {
    width: 280px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #d5d0d0;
  background-color: ${({ theme }) => theme.whiteColor};
  margin: 15px 0px;
  border-radius: 5px;
  resize: none;
  font-size: large;
  padding: 10px;
  text-indent: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #eae0e0;
  }
`;
