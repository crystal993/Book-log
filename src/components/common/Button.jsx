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
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.headerColor};
  }
`;

export default Button;
