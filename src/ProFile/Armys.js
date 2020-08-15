import React from "react";
import styled from "styled-components";
import armyBG from "../Image/profile/army.jpg";
import armyImg from "../Image/profile/mark.png";

const Container = styled.section`
  width: 800px;
  height: 500px;
  background-image: url(${(props) => props.BG});
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ArmyImg = styled.img`
  width: 280px;
  height: 300px;
  opacity: 0.8;
`;
const Contents = styled.div`
  width: 40%;
`;

const Army = styled.p`
  line-height: 1.8;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3a47;
`;
function Armys() {
  return (
    <Container BG={armyBG}>
      <ArmyImg src={armyImg} />
      <Contents>
        <Army>
          수도 군단 사령부 통신대대 통신병으로 성실히 군생활을 하였고 상병
          3호봉부터 병장까지 분대장이라는 직책을 맡았습니다. 분대장을 하면서
          직책의 대한 무게감과 책임감을 많이 배웠고 선 후임들과 사건 사고없이
          무사히 재미있게 군생활을 마무리 하였습니다.
        </Army>
      </Contents>
    </Container>
  );
}

export default Armys;
