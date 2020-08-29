import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { flipInY, fadeInLeft } from "react-animations";
const cardIn = keyframes`${fadeInLeft}`;
const SkilContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SkilArticle = styled.article`
  position: absolute;
  width: 18%;
  height: 60vh;
  background-color: red;

  animation: ${cardIn} 0.5 ease-in-out;
`;
const LeftBtn = styled.button`
  width: 100px;
  height: 50px;
  z-index: 222;
`;
const RightBtn = styled.button`
  z-index: 222;
`;
function SkilCard({ skils }) {
  console.log(skils);
  const [current, setCurrent] = useState(0);

  return (
    <SkilContainer>
      {skils
        .map((item, index) => (
          <>
            {current === index && (
              <>
                <SkilArticle className={index === current && "topCard"}>
                  <div> {item.title}</div>
                  {index}
                </SkilArticle>
                <LeftBtn onClick={() => setCurrent(current - 1)}>이전</LeftBtn>
                <RightBtn onClick={() => setCurrent(current + 1)}>
                  다음
                </RightBtn>
              </>
            )}
          </>
        ))
        .reverse()}
    </SkilContainer>
  );
}

export default SkilCard;
