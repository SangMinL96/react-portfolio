import React from "react";
import styled, { keyframes } from "styled-components";
import ParticlesBg from "particles-bg";
import icon from "../icon";
import myimg from "../Image/myImg1.jpg";
import contentImg from "../Image/textimg.png";

import { bounceInRight, bounceInLeft, zoomInUp } from "react-animations";
const fadeRight = keyframes`${bounceInRight}`;
const fadeLeft = keyframes`${bounceInLeft}`;
const zoomin = keyframes`${zoomInUp}`;
const HomeContainer = styled.section`
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeMyImg = styled.img`
  width: 25%;
  height: 400px;
  border-radius: 20px;
  opacity: 95%;
  animation: 7s ${fadeRight};
  @media only screen and (max-width: 840px) {
    flex-direction: column;
    width: 400px;
  }
`;
const ContentImg = styled.img`
  animation: 1s ${zoomin};
  @media only screen and (max-width: 590px) {
    margin-top: 3em;
    width: 450px;
  }
`;
const ContentText = styled.div`
  margin-right: 6em;
  line-height: 1.5;
  font-size: 1.1rem;
  color: #d4d1ff;
  font-weight: bold;
  @media only screen and (max-width: 590px) {
    font-size: 0.95rem;
    margin-right: 4em;
  }

  .text1 {
    animation: 2s linear ${fadeLeft};
  }
  .text2 {
    animation: 3s linear ${fadeLeft};
  }
  .text3 {
    animation: 4s linear ${fadeLeft};
  }
  .text4 {
    animation: 5s linear ${fadeLeft};
  }
  .text5 {
    animation: 6s linear ${fadeLeft};
  }
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
    random: 8,
  };
  return (
    <>
      <ParticlesBg type="custom" config={config} bg={true} />

      <HomeContainer>
        <HomeContent>
          <ContentImg src={contentImg} alt="" />
          <ContentText>
            <div className="text1">
              * 끊임없이 멈추지 않고 적극적으로 배움을 통해 성장!!!!
            </div>
            <div className="text2">
              * 최신 트렌드에 지속적으로 관심 가지는 자세!!
            </div>
            <div className="text3">
              * 새로운 언어를 배울려는 적극적인 모습!!
            </div>
            <div className="text4">
              * 구현이 되지않더라도 될때까지 포기 하지않는 의지!!
            </div>
            <div className="text5">
              * 무엇이든 열심히 하는 신입이 되도록 노력하겠습니다!!
            </div>
          </ContentText>
        </HomeContent>
        <HomeMyImg src={myimg} alt="" />
      </HomeContainer>
    </>
  );
}

export default Home;
