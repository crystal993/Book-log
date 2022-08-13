import React from "react";
import { FontAwesomeIcon } from "@fort";
import styled from "styled-components";

function Button({ content, icon, size, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      {icon && <Icon icon={icon} size={size} />}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Icon = styled(FontAwesomeIcon)``;

export default Button;
