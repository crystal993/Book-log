import React, { Fragment, useEffect, useState, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import styled from "styled-components";
import Loading from "../common/Loading";

function CardList() {
  /* 게시물, 현재 페이지 숫자, 현재 로딩 상태 */
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState({ isLoading: false });
  const [lastPostId, setlastPostId] = useState(0); //현재 페이지
  const size = 100;

  // const page = () => {
  //   return {
  //     page: 1,
  //   };
  // };

  /* fake 비동기 아이템 로드 */
  //
  // http://localhost:5002/post_list
  const fetchItems = async () => {
    setIsLoading((prev) => ({ ...prev, isLoading: true }));
    await new Promise((resolve) => setTimeout(resolve, 100));
    let { data } = await axios({
      method: "get",
      url: `http://52.78.227.187/api/post/0/100`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    if (data) {
      setPostList((prev) => [...prev, ...data.data]);
    }
    setIsLoading((prev) => ({ ...prev, isLoading: false }));
  };
  /* 초기 아이템 로딩 */
  useEffect(() => {
    fetchItems();
  }, []);

  /* 타겟 엘리먼트 */
  const target = useRef(null);

  /* 인터섹션 callback */
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();

      console.log(isLoading);
      observer.observe(entry.target);
    }
  };

  /* 옵저버 등록 */
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, []);

  // api/post
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `http://localhost:5002/post_list`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       setPostList([...res.data.data]);
  //     })
  //     .catch((err) => {});
  //   return () => {};
  // }, []);

  return (
    <Container>
      {postList.map((post) => {
        return (
          <Fragment key={post.postid}>
            <Card post={post} />
          </Fragment>
        );
      })}
      <div
        ref={target}
        style={{
          height: "100px",
          margin: "25px",
        }}
      >
        {isLoading && <Loading />}
      </div>
    </Container>
  );
}

export default CardList;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 10px;
`;
