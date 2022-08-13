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
  padding: 10px 50px;
  cursor: pointer;
`;

const Btn = styled.button`
  padding: 10px 15px;
  margin: 10px;
  color: ${(props) => props.theme.headerColor};
  border-radius: ${(props) => props.theme.buttonRadius};
  transition: ${(props) => props.theme.transition};
  border: none;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 4px 0px #5d5fef;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.headerColor};
  }
`;

export default Button;
