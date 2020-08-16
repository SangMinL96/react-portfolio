import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 40%;
  height: 30%;
  background-color: red;
`;
function Itemss({ match }) {
  const { id } = match.params;
  const detail = data.data[id];
  return (
    <>
      <Container>{detail.title}</Container>
    </>
  );
}

export default Itemss;
