import React from "react";
import styled from "styled-components";
import albaBG from "../Image/profile/alba.PNG";
import albaImg from "../Image/profile/albaimg.PNG";

const Container = styled.section`
  width: 800px;
  height: 500px;
  background-image: url(${(props) => props.BG});
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const AlbaImg = styled.img`
  width: 280px;
  height: 300px;
  border-radius: 60px;
  opacity: 0.8;
`;
const Contents = styled.div`
  width: 40%;
`;

const Alba = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e272e;
  span {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 1.5em;
    line-height: 1.2;
  }
`;
function Albas() {
  return (
    <Container BG={albaBG}>
      <AlbaImg src={albaImg} />
      <Contents>
        <Alba>
          애슐리 (홀서빙)
          <br />
          <span>(3개월)</span>
          <br />
          미스터 피자 (홀서빙)
          <br />
          <span>(8개월)</span>
          <br />
          스시로 (초밥가게 주방)
          <br />
          <span>(8개월)</span>
          <br />
          깐부치킨 (홀서빙)
          <br />
          <span>(15개월)</span>
          <br />
          (주)시스템어워드 (정직원 사원)
          <br />
          <span>(5개월)</span>
        </Alba>
      </Contents>
    </Container>
  );
}

export default Albas;
