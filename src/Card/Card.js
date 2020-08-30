import React from "react";
import styled from "styled-components";
import SkilCard from "./SkilCard";
import skils from "../skil.json";
import studys from "../study.json";
import StudyCard from "./StudyCard";
const CardContainer = styled.section`
  margin-top: 1.5em;
  width: 100%;
  height: 91.8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 770px) {
   flex-direction:column;
  }
}
`;

function Card() {
  console.log(studys.data);
  return (
    <CardContainer>
      <SkilCard skils={skils.data} />

      <StudyCard studys={studys.data} />
    </CardContainer>
  );
}

export default Card;
