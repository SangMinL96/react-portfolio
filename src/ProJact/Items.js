import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../data.json";
import { NavLink } from "react-router-dom";
import { BsXSquare } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaHome,
} from "react-icons/fa";

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}`;

const Container = styled.div`
  opacity: 1;
  position: absolute;
  border-radius: 10px;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 1100px;
  height: 76vh;
  background: #000000;
  background: linear-gradient(to top, #434343, #000000);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s forwards ease-in;
  @media only screen and (max-width: 1150px) {
    width: 900px;
  }
  @media only screen and (max-width: 940px) {
    width: 600px;
    height: 100vh;
  }
  @media only screen and (max-width: 640px) {
    width: 460px;
  }
`;

const DetailOut = styled(NavLink)`
  opacity: 1;
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 999;
  &:hover {
    color: red;
  }
`;
const DetailTitle = styled.h3`
  margin-top: 1em;
  font-size: 2rem;
  font-weight: bold;
`;
const DetailContents = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h5 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  video {
    @media only screen and (max-width: 640px) {
      width: 460px;
    }
  }

  @media only screen and (max-width: 940px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  width: 30%;
  @media only screen and (max-width: 940px) {
    width: 80%;
  }
`;
const Intro = styled.div`
  width: 100%;

  p {
    width: 100%;
    line-height: 1.3;
    font-size: 1rem;
  }
`;
const Skils = styled.div``;
const SkilIcons = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  margin-top: 1em;
`;
const Silts = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  font-size: 1.15rem;
  margin-top: 1em;
  @media only screen and (max-width: 940px) {
    flex-direction: column;
  }
`;
const Git = styled.a`
  width: 50%;
  height: 100%;
  background-color: #1b9cfc;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 80%;
  }
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;
const WebSite = styled.a`
  width: 50%;
  height: 100%;
  background-color: #ff4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 80%;
  }
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

function Itemss({ match }) {
  const { id } = match.params;
  const detail = data.data[id];

  return (
    <>
      <Container>
        <DetailOut to="/projact">
          <BsXSquare />
        </DetailOut>
        <DetailTitle>{detail.title}</DetailTitle>
        <DetailContents>
          <video width="600" height="340" controls>
            <source src={detail.movie}></source>
          </video>
          <Content>
            <Intro>
              <h5>소개</h5>
              <p>{detail.Summary}</p>
            </Intro>
            <Skils>
              <h5>사용 스킬</h5>
              <span>{detail.skils}</span>
            </Skils>
            <SkilIcons>
              <FaHtml5 style={{ color: "#81ecec" }} />
              <FaCss3Alt style={{ color: "#00b894" }} />
              <FaJsSquare style={{ color: "#74b9ff" }} />
              <FaReact style={{ color: "#0984e3" }} />
              <GrGraphQl style={{ color: "#e84393" }} />
            </SkilIcons>
          </Content>
        </DetailContents>
        <Silts>
          <Git href={detail.git} target="blank">
            <FaGithub />
            &ensp;프로젝트 깃허브 사이트
          </Git>
          <WebSite href={detail.site} target="blank">
            <FaHome />
            &ensp; 프로젝트 구현 사이트
          </WebSite>
        </Silts>
      </Container>
    </>
  );
}

export default Itemss;
