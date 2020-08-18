import React from "react";
import Flipage from "react-flip-page";
import styled, { keyframes } from "styled-components";
import proFileImg from "../Image/ProFileimg.jpg";
import My from "./My";
import Educations from "./Educations";
import Armys from "./Armys";
import Albas from "./Albas";

const fadeInOut = keyframes`
0%{
  height: 0vh;
  opacity: 1;

}
50%{
  height: 91.2vh;
  opacity: 1;
}
100%{
  height: 0vh;
  opacity: 1;
}

`;
const fadeIn = keyframes`
0%{
  
  opacity: 0;

}

100%{
  
  opacity: 1;
}`;
const AniContainer = styled.div`
  margin-top: 1.8em;
  background-color: #329dd6;
  width: 100%;
  height: 0vh;
  animation: ${fadeInOut} 2.5s forwards ease-in;
`;
const PFcontainer = styled.section`
  opacity: 0;
  width: 100%;
  height: 91.2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1.2s 1.2s forwards ease-in;
  background: #1c92d2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f2fcfe,
    #1c92d2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #f2fcfe,
    #1c92d2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
    <>
      <AniContainer></AniContainer>
      <PFcontainer bg={proFileImg} className="ani">
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
    </>
  );
}

export default ProFile;
