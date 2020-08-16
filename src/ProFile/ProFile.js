import React from "react";
import Flipage from "react-flip-page";
import styled from "styled-components";
import proFileImg from "../Image/ProFileimg.jpg";
import My from "./My";
import Educations from "./Educations";
import Armys from "./Armys";
import Albas from "./Albas";
const PFcontainer = styled.section`
  position: absolute;
  top: -3%;
  width: 100%;
  height: 99.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.8em;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  .books {
    cursor: pointer;
  }
`;
const Title = styled.h3`
  font-size: 4rem;
  font-weight: bold;
`;
const TitleContent = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1em;
  font-weight: bold;
`;

function ProFile() {
  return (
    <PFcontainer bg={proFileImg}>
      <Title>ProFile</Title>
      <TitleContent>(클릭후 드래그하여 책을 넘겨주세요.)</TitleContent>
      <Flipage
        height={500}
        width={800}
        orientation={"horizontal"}
        className={"books"}
        pageBackground={"#d0d9e100"}
        animationDuration={300}
        showSwipeHint={true}
      >
        <article>
          <My />
        </article>
        <article>
          <Educations />
        </article>
        <article>
          <Armys />
        </article>
        <article>
          <Albas />
        </article>
      </Flipage>
    </PFcontainer>
  );
}

export default ProFile;
