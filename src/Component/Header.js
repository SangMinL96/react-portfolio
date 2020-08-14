import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: 1.1rem;
  color: white;
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
  width: 80px;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.hover ? "#74b9ff" : "transparent")};
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
        <NavList>
          <NavLink to="/">Home</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/profile">ProFile</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/projact">ProJact</NavLink>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default withRouter(Header);
