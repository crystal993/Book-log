import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// ::: 리덕스로 보내기 위해 dispatch 연결, 미들웨어 연결
// import { useDispatch } from "react-redux";
// import axios from "axios";
import styled from 'styled-components';


function AddForm() {
  //input으로 받은 값들
  const [ category, setCategory ] = useState("카테고리를 선택하세요.")
  const [ bookCoverFile, setBookCoverFile ] = useState(null);
  const [ bookTitle, setBookTitle ] = useState("");
  const [ author, setAuthor ] = useState(""); 
  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");

  const onChangeCategory = (e) => setCategory(e.target.value);
  const onChangeBookCoverFile = (e) => setBookCoverFile(e.target.value);
  const onChangeBookTitle = (e) => setBookTitle(e.target.value);
  const onChangeAuthor = (e) => setAuthor(e.target.value);
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  
  console.log(category);
  console.log(bookCoverFile);
  console.log(bookTitle);
  console.log(author);
  console.log(title);
  console.log(content);

  // Form 입력값 모음
  const [bookInput, setBookInput] = useState({ 
    category: "",  
    bookCoverFile: "",  
    bookTitle: "",
    author: "",
    title: "",
    content: "",
  });
  

  // onChange 이벤트가 발생한 target을 받아와 value값을 할당해준다.
  const onChangeInputs = (e) => {
    const { value, name } = e.target;
    setBookInput({...bookInput, [name] : value });
    console.log(e.target.value);
  };

  // 취소 버튼 누르면 뒤로가기
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  }


    //파일리더로 파일 읽어오기 // 비동기 처리 중 배열아닌 변수의 인덱스를 받아오려고 해서 발생하는 오류
    // const selectFile = (e) =>{
    //   setBookCoverFile(e.target.files[0]);
    //   if(!e.target.file[0]){
    //     return;
    //   }

    //   const reader = new FileReader();
    //   reader.readAsDateURL(e.target.files[0]);
    //   reader.onload = () => {
    //     setBookCoverFile(reader.result);
    //   };
    // }

  
  // const addContent =  async (newContents) => {
  //   const response = await axios.post("http://localhost5001/posts", {
  //     title: newContents.title,
  //     text: newContents.text,
  //   });
  //   return response.data;
  // };

  //::아래 코드로 노드의 파일 리스트에서 첫 번째 항목을 File 객체로 가져올 수 있습니다.
  // const file = document.getElementById('fileItem').files[0];
  //이건 자바스크립트

  // const handleDropProduct = (e) => {
  //   const { value } = e.target;
  // };
  
  //::등록 기능
  // const onCreatePost = (e) => {
  //   e.preventdefault();
  //   if (bookInput.title !== "" || bookInput.content !== "") {
  //     const newPost = {
  //       title: bookInput.title,
  //       bookTitle: "",
  //       author: "",
  //       category: "",
  //       content: bookInput.content,
  //     };
  //     dispatch(addContent(newPost));
  //     setBookInput({
  //       title: "",
  //       author: "",
  //       category: "", //이거 어떻게 만들지? 드롭다운?
  //       content: "",
  //     });
  //   } else {
  //     console.log("내용을 입력해주세요");
  //   }
  // };

  return (
    <InputArea> {/* method="post" encType="multipart/form-data" onSubmit={onCreatePost}*/}
      <CateArea>
        <select size="1" name="category" value={category} onChange={onChangeCategory}>
                <option className="placehd">
                  카테고리를 설정해주세요
                </option>
                <option value="소설">소설</option>
                <option value="에세이">에세이</option>
                <option value="시">시</option>
                <option value="인문">인문</option>
                <option value="정치사회">정치사회</option>
                <option value="자기개발">자기개발</option>
                <option value="역사문화">역사문화</option>
                <option value="외국어">외국어</option>
        </select>
      </CateArea>      
      <div>
        <label>표지</label>
        <input
          id="fileItem"
          type="text"
          name="bookCoverFile"
          onChange={onChangeBookCoverFile}
          // accept="image/*"
          // onChange={selectFile} 
        />
      </div>
      <div>
        <label>도서명</label>
        <input
          type="text"
          name="bookTitle"
          value={bookTitle}
          onChange={onChangeBookTitle}
        />
      </div>
      <div> 
        <label>저자</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={onChangeAuthor}
        />
      </div>
      <div>
        <label>제목</label>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={onChangeTitle} />
      </div>
      <div>
        <label>내용</label>
        <TextArea
          type="textarea"
          multiline={true}
          style={{padding:1, width:200}}
          textAlign="top"
          placeholder={"감상평을 입력해 주세요."}
          name="content"
          value={content}
          onChange={onChangeContent}
        />
      </div>

      <ButtonBox>
      <button>등록</button>
      <button onClick={onClickBack}>취소</button>
      </ButtonBox>
    </InputArea>
  );
}

export default AddForm;


const InputArea = styled.form`
background-color: lightgray;
  width: 500px;
  height: 800px;
  display: grid;
  margin: 50px auto;
  padding: 50px;

  @media (max-width: 767px) {
    width: 280px;
  }
`;

const CateArea = styled.div`
  select {
    width: 200px;
    height: 50px;
    }
`;

const TextArea = styled.input`
  
`;


const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
