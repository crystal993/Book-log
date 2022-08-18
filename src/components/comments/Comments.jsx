import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { __getCommentsList } from "../../redux/modules/commentSlice";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

function Comments({ post }) {
  const { id } = useParams();
  const postId = id;
  const dispatch = useDispatch();
  const [commentList, setCommentList] = useState([]);
  // const commentList = useSelector((state) => state.comment.commentList);
  console.log(commentList);
  // console.log(post);
  //페이지네이션
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const { data } = axios({
      method: "get",
      url: `http://3.39.229.105/api/post/${postId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("AccessToken"),
        RefreshToken: localStorage.getItem("RefreshToken"),
      },
    }).then((res) => {
      setCommentList(res.data.data.commentResponseDtoList);
    });
    console.log(data);
  }, []);

  // TODO post는 Detail페이지 불러올 때라 바뀔 수도 있음.
  return (
    <>
      <Container>
        {commentList.slice(offset, offset + limit).map((comment) => {
          return (
            <Fragment key={comment.commentId}>
              <Comment comment={comment} post={post} />
            </Fragment>
          );
        })}
        <PaginationContainer>
          <Pagination
            total={commentList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </PaginationContainer>
      </Container>
    </>
  );
}

export default Comments;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 10px;
`;

const PaginationContainer = styled.div``;
