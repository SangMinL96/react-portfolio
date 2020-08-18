import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import data from "../data.json";
import { NavLink } from "react-router-dom";
import "./ani.css";
const out = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}`;

const Container = styled.div`
  opacity: 1;
  position: absolute;
  border-radius: 20px;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 62%;
  height: 80%;
  background-color: red;

  animation: ${out} 1s forwards ease-in;
`;

const DetailOut = styled(NavLink)`
  opacity: 1;
  position: absolute;
  top: 1%;
  right: 3%;
  font-size: 3rem;
  font-weight: bold;
  z-index: 999;
`;
function Itemss({ match }) {
  const { id } = match.params;
  const detail = data.data[id];

  return (
    <>
      <Container>
        <DetailOut to="/projact">x</DetailOut>
        {detail.title}
        <video width="600" height="500" controls>
          <source src={detail.movie}></source>
        </video>
      </Container>
    </>
  );
}

export default Itemss;
