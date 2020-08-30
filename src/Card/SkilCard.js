import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { zoomIn, flipInY } from "react-animations";
import SkilDetail from "./SkilDetail";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
const carIn = keyframes`${flipInY}`;
const detailZoomIn = keyframes`${zoomIn}`;
const SkilContainer = styled.div`
  width: 320px;
  left: 20%;
  height: 50vh;
  h1 {
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  @media only screen and (max-width: 770px) {
    margin-top: 12em;
  }
`;
const SkilArticle = styled.article`
  position: relative;
  width: 320px;
  height: 50vh;
  animation: ${carIn} 1s ease;
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

const SkilLogo = styled.div`
  background-image: url(${(props) => props.logo});
  background-size: 100% 100%;
  margin: 0 auto;
  width: 100px;
  height: 100px;

  margin-top: 0.5em;
`;
const SkilTag = styled.div`
  margin-top: 3em;
  width: 90%;
  padding: 10px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3d3d3d;
`;
const Seemore = styled.div`
  width: 160px;
  height: 50px;
  border-radius: 10px;
  background-color: #414345;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
  box-shadow: 0px 3px 5px 0px #222f3e;
  cursor: pointer;
  font-weight: 600;
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 1px 5px 0px #222f3e;
  }
  &:hover {
    opacity: 0.7;
  }
`;
const SkilBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fa00001a;
  z-index: 1;
  animation: ${detailZoomIn} 1s ease-out forwards;
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

function SkilCard({ skils }) {
  console.log(skils);
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState(false);
  const onLeft = () => {
    if (current === 0) {
      toast("첫번째 화면 입니다.");
    } else {
      setCurrent(current - 1);
    }
  };
  const onRight = () => {
    if (current === skils.length - 1) {
      toast("마지막 화면 입니다.");
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <SkilContainer>
      {skils
        .map((item, index) => (
          <div key={item.id}>
            {current === index && (
              <>
                <SkilArticle id={item.id}>
                  <h1>Skil Card</h1>
                  <h3>{item.title}</h3>
                  <SkilLogo logo={item.logo} />
                  <SkilTag>{item.skilTag}</SkilTag>
                  <Seemore onClick={() => setDetail(true)}>Skil Level</Seemore>
                  <LeftBtn onClick={onLeft}>이전</LeftBtn>
                  <RightBtn onClick={onRight}>다음</RightBtn>
                </SkilArticle>

                {detail && (
                  <>
                    <SkilBackGround onClick={() => setDetail(false)} />
                    <SkilDetail
                      title={item.title}
                      logo={item.logo}
                      level={item.Level}
                      summary={item.Summary}
                    />
                  </>
                )}
              </>
            )}
          </div>
        ))
        .reverse()}
      <ToastContainer position="bottom-center" />
    </SkilContainer>
  );
}

export default SkilCard;
