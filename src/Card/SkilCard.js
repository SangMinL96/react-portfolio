import React from "react";
import styled from "styled-components";
import { PanResponder, Animated } from "react-panresponder-web";

const SkilContainer = styled.article`
  position: absolute;
  width: 23%;
  height: 60vh;
  background-color: red;
`;
const Title = styled.h3``;

function SkilCard({ skils }) {
  console.log(skils);
  return (
    <>
      {skils.map((item) => (
        <SkilContainer></SkilContainer>
      ))}
    </>
  );
}

export default SkilCard;
