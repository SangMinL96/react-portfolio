import React from "react";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import icon from "./icon";
import myimg from "./Image/myImg1.jpg";
import contentImg from "./Image/movingIMG.gif";
import contentImg2 from "./Image/content.png";
import homelogo from "./Image/homelogo.png";

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeLogo = styled.img`
  width: 200px;
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeMyImg = styled.img`
  width: 25%;
  height: 45%;
  border-radius: 20px;
  opacity: 95%;
  margin-right: 15em;
`;
const ContentImg = styled.img`
  opacity: 0.8;
`;
const ContentText = styled.img`
  margin-right: 5em;
`;
function Home() {
  const config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    body: icon,
    position: "all",
    cross: "dead",
    random: 10,
  };
  return (
    <>
      <ParticlesBg type="custom" config={config} bg={true} />
      <HomeLogo src={homelogo} alt="" srcset="" />
      <HomeContainer>
        <HomeContent>
          <ContentImg src={contentImg} alt="" srcset="" />
          <ContentText src={contentImg2} />;
        </HomeContent>
        <HomeMyImg src={myimg} alt="" srcset="" />
      </HomeContainer>
    </>
  );
}

export default Home;
