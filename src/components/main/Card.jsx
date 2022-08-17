import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

function Card({ post }) {
  const navigate = useNavigate();
  const onClickHandler = (path) => {
    navigate(path);
  };
  const post_id = post.postid;
  return (
    <CardView
      onClick={() => {
        onClickHandler(`/detail/${post_id}`);
      }}
    >
      <Image src="http://designwith.co.kr/wp-content/uploads/2021/03/1-6.png" />
      <CardContents>
        <Title>
          {post?.title?.length > 14
            ? post.title.slice(0, 14).concat("...")
            : post.title}
        </Title>
        <Content>
          {post?.content?.length > 16
            ? post.content.slice(0, 16).concat("...")
            : post.content}
        </Content>
        <Hr noshade />
        <CardFooter>
          <WriterFooter>
            <User icon={faUser} />
            <Writer>by {post.nickname}</Writer>
          </WriterFooter>
          <Icon icon={faHeart} />
        </CardFooter>
      </CardContents>
    </CardView>
  );
}

const CardView = styled.div`
  width: 20%;
  height: 360px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  box-shadow: 3px 5px 13px 0px #f1f1f4;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;

const CardContents = styled.div`
  margin: 0px 5px;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
  height: 70%;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const Content = styled.p`
  font-size: 16px;
`;

const CardFooter = styled.div`
  margin: -12px auto 0px auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const WriterFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Writer = styled.p`
  font-size: 13px;
  color: #a0a0a0;
`;

const Hr = styled.hr`
  border: 1px solid #f1f1f4;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #5d5fef;
`;

const User = styled(FontAwesomeIcon)`
  color: #dbdbdf;
  background-color: #747477;
  border: 1px solid #747477;
  border-radius: 50px;
  padding: 2.5px;
`;

export default Card;
