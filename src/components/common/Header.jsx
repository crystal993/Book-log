import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled, { CSSprop } from "styled-components";
import Button from "./NavButton";
import { logout } from "../../redux/modules/userSlice";
import axios from "axios";

function Header(color) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);

  const onClickHandler = (path) => {
    navigate(path);
  };

  // ${URI.BASE}
  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };

  const logoutHandler = async () => {
    const { data } = await axios.get(`http://3.39.229.105/api/user/logout`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        RefreshToken: localStorage.getItem("refreshToken"),
      },
    });

    if (data) {
      console.log("로그아웃!");
    }
    dispatch(logout());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

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
                    onClickHandler("/signup");
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
                    logoutHandler("/logout");
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
  background-color: ${(props) => props.theme.headerColor};
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
