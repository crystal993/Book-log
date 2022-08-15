import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Button({ content, icon, size, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      {icon && <Icon icon={icon} size={size} />}
      {content && <Btn>{content}</Btn>}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  color: #ffffff;
  padding: 10px 20px;
`;

const Btn = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  margin: 5px;
  color: #ffffff;
  border-radius: ${(props) => props.theme.buttonRadius};
  transition: ${(props) => props.theme.transition};
  border: none;
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 4px 0px #b6b7b9;
    color: ${(props) => props.theme.mainColor};
  }
  &[disabled] {
    background: white;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: black;
    font-weight: bold;
    color: white;
    cursor: revert;
    transform: revert;
  }
`;

export default Button;
