import React from "react";
import styled from "styled-components";
import SkilCard from "./SkilCard";
import skils from "../skil.json";
import studys from "../study.json";
import StudyCard from "./StudyCard";
import CardImg from "./CardImg";
const CardContainer = styled.section`
  margin-top: 1.5em;
  width: 100%;
  height: 91.8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 770px) {
   flex-direction:column;
  }
}
`;

function Card() {
  return (
    <CardContainer>
      <SkilCard skils={skils.data} />
      <CardImg />
      <StudyCard studys={studys.data} />
    </CardContainer>
  );
}

export default Card;
