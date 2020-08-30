import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { flipInY } from "react-animations";

import logoIcons from "../skilIcon.json";
import { useRef } from "react";
const carIn = keyframes`${flipInY}`;

const CardImgContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  overflow: hidden;
  align-items: center;
  background: #232526;
  background: linear-gradient(to top, #414345, #232526);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #ed4c67;
  @media only screen and (max-width: 1330px) {
    bottom: -80px;
  }
  @media only screen and (max-width: 770px) {
    bottom: -720px;
  }
`;
const LogoSilde = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;
`;
const CardImgArticle = styled.article`
  background-image: url(${(props) => props.logo});
  background-size: 100% 100%;
  width: 150px;
  height: 150px;
  display: flex;
  margin-left: 25px;

  align-items: center;
`;

function CardImg() {
  const [current, setCurrent] = useState(0);
  const sildeRef = useRef();

  const slide = () => {
    let iconLength = logoIcons.data.length;
    if (current <= iconLength - 1) {
      sildeRef.current.style.left = current * -175 + "px";
      setTimeout(() => setCurrent(current + 1), 1500);
    } else {
      sildeRef.current.style.left = 0 + "px";
      setTimeout(() => setCurrent(0), 1500);
    }
  };
  useEffect(() => {
    slide();
  }, [current]);
  return (
    <CardImgContainer>
      <LogoSilde ref={sildeRef}>
        {logoIcons.data.map((item) => (
          <>
            <CardImgArticle key={item.id} logo={item.logo}></CardImgArticle>
          </>
        ))}
      </LogoSilde>
    </CardImgContainer>
  );
}

export default CardImg;
