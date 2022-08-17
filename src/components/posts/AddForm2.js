import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../common/NavButton";

const AddForm2 = () => {
  const { id } = useParams();
  const post_id = id;
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
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

  // 취소 버튼 디테일로
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(`/detail/${post_id}`);
  };

  //::등록 기능
  const onUpdateHandler = async (formData, e) => {
    if (formData.title !== "" || formData.content !== "") {
      const newPost = {
        title: formData.title,
        bookTitle: formData.bookTitle,
        author: formData.author,
        category: formData.category,
        content: formData.content,
      };
      console.log(formData);
      // `${URI.BASE}/api/user/login`
      //   const { data } = await axios({
      //     method: "put",
      //     url: `http://localhost:3000/add_posts/${postId}`,
      //     data: newPost,
      //   });
      //   setBookInfo({
      //     category: "",
      //     bookCoverFile: "",
      //     bookTitle: "",
      //     author: "",
      //     title: "",
      //     content: "",
      //   });
      // } else {
      //   console.log("내용을 입력해주세요");
      // }
    }
  };

  useEffect(() => {
    setFocus("category");
    return () => {};
  }, []);

  return (
    <UpdateView>
      <Form onSubmit={handleSubmit(onUpdateHandler)}>
        <Title>게시글 작성</Title>
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
          <ButtonBox>
            <MsgBox></MsgBox>
          </ButtonBox>
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
          <ButtonBox>
            <MsgBox>
              {errors.bookTitle && (
                <ErrorMsg>{errors.bookTitle.message}</ErrorMsg>
              )}
            </MsgBox>
          </ButtonBox>
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
          <ButtonBox>
            <MsgBox>
              {errors.author && <ErrorMsg>{errors.author.message}</ErrorMsg>}
            </MsgBox>
          </ButtonBox>
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
          <ButtonBox>
            <MsgBox>
              {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
            </MsgBox>
          </ButtonBox>
          <Label>감상평</Label>
          <InputBox>
            <TextArea
              type="textarea"
              multiline={true}
              textAlign="top"
              placeholder={"감상평을 입력해 주세요."}
              name="content"
              value={bookInfo.content}
              onChange={onChangeHandler}
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
        <Button content={"게시글 수정"} type="submit" />
      </Form>
      {/* {openModal && <Modal msg={msg} />} */}
    </UpdateView>
  );
};

export default AddForm2;

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
