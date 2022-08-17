import React from "react";
import styled from "styled-components";

function SignUpLayout(props) {
  return <Layouts>{props.children}</Layouts>;
}

const Layouts = styled.div`
  background-color: ${(props) => props.theme.subColor};
  width: 100%;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignUpLayout;
