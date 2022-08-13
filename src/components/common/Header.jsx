import React from "react";
import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Button from "./NavButton";

function Header() {
  const navigate = useNavigate();

  const onClickHandler = (path) => {
    navigate(path);
  };

  const logoutHandler = () => {
    console.log("로그아웃!");
  };

  const isLogin = false;
  //TODO : 로그아웃 처리

  return (
    <>
      <NavBar>
        <NavItem>
          <Button
            icon={faHome}
            onClick={() => {
              onClickHandler("/");
            }}
          />
        </NavItem>
        <Container>
          {!isLogin && (
            <>
              <NavItem>
                <Button
                  content="Login"
                  onClick={() => {
                    onClickHandler("/login");
                  }}
                />
              </NavItem>
              <NavItem>
                <Button
                  content="Sign up"
                  onClick={() => {
                    logoutHandler("/signup");
                  }}
                />
              </NavItem>{" "}
            </>
          )}
          {isLogin && (
            <>
              <NavItem>
                <Button
                  content="Add Post"
                  onClick={() => {
                    onClickHandler("/add");
                  }}
                />
              </NavItem>
              <NavItem>
                <Button
                  content="Logout"
                  onClick={() => {
                    onClickHandler("/logout");
                  }}
                />
              </NavItem>
            </>
          )}
        </Container>
      </NavBar>
    </>
  );
}

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.headerColor};
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.div``;

const Logo = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-right: 110px;
`;

export default Header;
