import React from "react";
import styled from "styled-components";
import homelogo from "../Image/homelogo.png";
import { Link, withRouter } from "react-router-dom";

const HeaderImg = styled.img`
  width: 130px;
`;
const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  font-size: 1.2rem;
  color: whtie;
  font-weight: bold;
  background-color: ${(props) =>
    props.bg === "/"
      ? "rgba(20, 20, 20, 0.8)"
      : props.bg === "/profile"
      ? "#329DD6"
      : props.bg === "/projact"
      ? "#260808"
      : "rgba(20, 20, 20, 0.8)"};
  /* background-color: rgba(20, 20, 20, 0.8); */
  z-index: 99;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NavList = styled.li`
  margin-left: 1em;
  margin-right: 1em;

  border-bottom: 3px solid
    ${(props) => (props.hover ? "#ffffff" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const NavLink = styled(Link)`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header({ location: { pathname } }) {
  return (
    <HeaderContainer bg={pathname}>
      <Nav>
        <NavList hover={pathname === "/"}>
          <NavLink to="/">Home</NavLink>
        </NavList>
        <NavList hover={pathname === "/profile"}>
          <NavLink to="/profile">ProFile</NavLink>
        </NavList>
        <HeaderImg src={homelogo} alt="" />
        <NavList hover={pathname === "/projact"}>
          <NavLink to="/projact">ProJact</NavLink>
        </NavList>
        <NavList hover={pathname === "/card"}>
          <NavLink to="/card">Card</NavLink>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default withRouter(Header);
