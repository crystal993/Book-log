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
  margin: 5px;
  color: #ffffff;
  border-radius: ${(props) => props.theme.buttonRadius};
  transition: ${(props) => props.theme.transition};
  border: none;
  background-color: ${(props) => props.theme.headerColor};
  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;

export default Button;