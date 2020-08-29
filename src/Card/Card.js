import React from "react";
import styled from "styled-components";
import SkilCard from "./SkilCard";
import skils from "../skil.json";
const CardContainer = styled.section`
  margin-top: 1.5em;
  width: 100%;
  height: 91.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Card() {
  return (
    <CardContainer>
      <SkilCard skils={skils.data} />
    </CardContainer>
  );
}

export default Card;
