import React from "react";
import styled from "styled-components";
import homelogo from "../Image/homelogo.png";
import { Link, withRouter } from "react-router-dom";

const HeaderImg = styled.img`
  width: 170px;
`;
const HeaderContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: 1.2rem;
  color: #ff958a;
  font-weight: bold;
  background-color: rgba(20, 20, 20, 0.8);
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
  width: 60px;
  border-bottom: 3px solid
    ${(props) => (props.hover ? "#ff4c38" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const NavLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header({ location: { pathname } }) {
  return (
    <HeaderContainer>
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
      </Nav>
    </HeaderContainer>
  );
}

export default withRouter(Header);
