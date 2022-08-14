import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  __updateComment,
  __deleteComment,
} from "../../redux/modules/commentSlice";

// TODO 로그인 여부, 작성자에 따라서 접근권한 부여
// isLogin = false
// 댓글 입력 못하도록 - 회원만 작성 가능합니다(모달창)
// isLogin = true
// 댓글 입력 가능
// isLogin = true, 작성자가 일치할 때
// 댓글 수정, 삭제 가능
function Comment({ comment, post }) {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.commentList);

  const { id } = useParams(); //postId - axios요청시에 필요함.
  const [isEdit, setEdit] = useState(false);
  const [updateComment, setUpdateComment] = useState(comment.comment);

  const isEditHandler = (isEdit) => {
    setEdit(!isEdit);
  };

  // const postId = post?.postId;
  const commentId = comment.id;

  const onUpdateHandler = (e) => {
    dispatch(
      __updateComment({
        id: commentId,
        nickname: post.nickname,
        comment: updateComment,
      })
    );
    setUpdateComment(updateComment);
    setEdit(!isEdit);
  };

  const onDeleteHandler = () => {
    // TODO 모달창으로 변경
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      console.log(parseInt(commentId));
      dispatch(__deleteComment(commentId));
    } else {
      return;
    }
  };

  useEffect(() => {
    setUpdateComment(updateComment);
  }, [setUpdateComment]);

  return (
    <>
      <CommentView>
        <CommentHeader>
          <CommentUserProfile>
            <User icon={faUser} />
            <Writer> {comment.nickname}</Writer>
          </CommentUserProfile>
          <CommentButtons>
            {!isEdit && (
              <CommentButton
                onClick={() => {
                  isEditHandler(isEdit);
                }}
              >
                수정
              </CommentButton>
            )}
            <CommentButton onClick={onDeleteHandler}>삭제</CommentButton>
          </CommentButtons>
        </CommentHeader>
        {isEdit ? (
          <>
            <CommentContent>
              <Textarea
                required
                type="text"
                placeholder={"댓글을 입력해주세요. (5-100자)"}
                name="comment"
                value={updateComment}
                onChange={(e) => {
                  setUpdateComment(e.target.value);
                }}
              />
            </CommentContent>
            <ButtonBox>
              <Button
                content={"취소"}
                onClick={() => {
                  isEditHandler(isEdit);
                }}
              />
              <Button content={"댓글 수정"} onClick={onUpdateHandler} />
            </ButtonBox>
            <Hr noshade />
          </>
        ) : (
          <>
            <CommentContent>{comment.comment}</CommentContent>
            <Hr noshade />
          </>
        )}
      </CommentView>
    </>
  );
}

export default Comment;

const CommentView = styled.div`
  width: 40%;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const CommentUserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const CommentButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: -20px;
`;

const CommentButton = styled.button`
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.MainColor}; ;
`;

const Writer = styled.p`
  font-size: 15px;
  color: #a0a0a0;
`;

const User = styled(FontAwesomeIcon)`
  color: #dbdbdf;
  font-size: 20px;
  background-color: #747477;
  border: 1px solid #747477;
  border-radius: 50px;
  padding: 10px;
`;

const CommentContent = styled.div`
  display: flex;
  margin: 20px 0px 40px 0px;
  height: 20%;
`;

const Hr = styled.hr`
  width: 105%;
  border: none;
  height: 1px;
  background-color: #f1efef;
  size: 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 60px;
  border: 1px solid #d5d0d0;
  border-radius: 5px;
  resize: none;
  background-color: transparent;
  font-size: medium;
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
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: -20px;
`;
