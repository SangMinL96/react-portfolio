import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { flipInY } from "react-animations";
import { ToastContainer, toast } from "react-toastify";

import "../../node_modules/react-toastify/dist/ReactToastify.css";
const studyCarIn = keyframes`${flipInY}`;
const StudyContainer = styled.div`
  width: 320px;
  right: 20%;
  height: 50vh;

  h1 {
    width: 320px;
    position: absolute;
    top: -13%;
    left: 18%;

    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.5em;
  }
  p {
    font-weight: 500;
    margin-top: 0.5em;
    line-height: 1.3;
    width: 80%;
    font-size: 0.95rem;
  }
  @media only screen and (max-width: 770px) {
    margin-top: 12em;
  }
`;

const StudyArticle = styled.article`
  position: absolute;
  width: 320px;
  height: 50vh;
  animation: ${studyCarIn} 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #000000; /* fallback for old browsers */

  background: linear-gradient(
    to bottom,
    #000000,
    #434343
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 0.5em;
  }
`;

const StudyLogo = styled.div`
  background-image: url(${(props) => props.logo});
  background-size: 100% 100%;
  margin: 0 auto;
  width: 100px;
  height: 100px;

  margin-top: 0.5em;
`;
const LeftBtn = styled.button`
  position: absolute;
  left: 0;
  bottom: -40px;
  width: 160px;
  height: 40px;
  background-color: #1b9cfc;
  border: 1px solid #1b9cfc;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const RightBtn = styled.button`
  position: absolute;
  position: absolute;
  right: 0;
  bottom: -40px;
  width: 160px;
  height: 40px;
  background-color: #ff4d4d;
  border: 1px solid #ff4d4d;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function StudyCard({ studys }) {
  const [current, setCurrent] = useState(0);
  const onLeft = () => {
    if (current === 0) {
      toast("첫번째 화면 입니다.");
    } else {
      setCurrent(current - 1);
    }
  };
  const onRight = () => {
    if (current === studys.length - 1) {
      toast("마지막 화면 입니다.");
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <StudyContainer>
      {studys
        .map((item, index) => (
          <>
            {current === index && (
              <>
                <StudyArticle key={item.id} id={item.id}>
                  <h1>Study Card</h1>
                  <h3>{item.title}</h3>
                  <StudyLogo logo={item.logo} />
                  <p>{item.Summary}</p>
                  <LeftBtn onClick={onLeft}>이전</LeftBtn>
                  <RightBtn onClick={onRight}>다음</RightBtn>
                </StudyArticle>
              </>
            )}
          </>
        ))
        .reverse()}
      <ToastContainer position="bottom-center" />
    </StudyContainer>
  );
}

export default StudyCard;
