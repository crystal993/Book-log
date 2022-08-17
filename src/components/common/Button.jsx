import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Button({ content, icon, size, onClick, width }) {
  return (
    <Wrapper onClick={onClick} width={width}>
      {icon && <Icon icon={icon} size={size} />}
      {content && <Btn>{content}</Btn>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(width) => width};
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.mainColor};
  padding: 10px 20px;
`;

const Btn = styled.button`
  width: fit-content;
  text-align: center;
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
`;

export default Button;
