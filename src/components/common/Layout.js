import React from "react";
import styled from "styled-components";

function Layout(props) {
  return <Layouts>{props.children}</Layouts>;
}

const Layouts = styled.div`
  width: 100%;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
