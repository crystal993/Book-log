import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { __getCommentsList } from "../../redux/modules/commentSlice";
import Pagination from "./Pagination";

function Comments({ post }) {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.commentList);

  //페이지네이션
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    dispatch(__getCommentsList());
  }, []);

  // TODO post는 Detail페이지 불러올 때라 바뀔 수도 있음.
  return (
    <>
      <Container>
        {commentList.slice(offset, offset + limit).map((comment) => {
          return (
            <Fragment key={comment.id}>
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
