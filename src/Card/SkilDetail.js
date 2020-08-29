import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
const detailZoomIn = keyframes`
 0%{
  opacity:0;
 
  height:0%;
 }100%{
  opacity:1;
  
  height:60%;
 }

`;
const level = (lv) => keyframes`
0%{
  width:17%;
}100%{
  width: ${lv}%;
}
`;
const SkilDetailArticle = styled.article`
  position: fixed;
  z-index: 2;
  left: 35%;
  top: 24%;
  width: 550px;
  height: 60%;
  overflow-y: hidden;
  background: #7f7fd5;
  background: linear-gradient(to bottom, #91eae4, #86a8e7, #7f7fd5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 5px;
  opacity: 0;

  animation: ${detailZoomIn} 1s ease-out forwards;
  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  p {
    font-weight: 600;
    margin-top: 0.5em;
    line-height: 1.5;
    width: 80%;
  }
`;
const DetailLogo = styled.div`
  background-image: url(${(props) => props.logo});
  background-size: 100% 100%;
  margin: 0 auto;
  width: 100px;
  height: 100px;
`;
const SkilLevel = styled.div`
  width: 80%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;
const Level = styled.div`
  font-size: 0.9rem;
  width: 0%;
  height: 30px;
  background: #ff416c;
  background: linear-gradient(to left, #ff4b2b, #ff416c);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  animation: ${(props) => level(props.lv)} 2s 0.5s ease-in forwards;
`;

function SkilDetail({ title, logo, level, summary }) {
  return (
    <SkilDetailArticle>
      <h3>{title}</h3>
      <DetailLogo logo={logo} />
      <SkilLevel>
        <Level lv={level}>LEVEL {level}%</Level>
      </SkilLevel>
      <p>{summary}</p>
    </SkilDetailArticle>
  );
}

export default SkilDetail;
