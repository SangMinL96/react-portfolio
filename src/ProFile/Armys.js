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

const Army = styled.div`
  line-height: 1.8;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  color: #e15f41;
`;
function Armys() {
  return (
    <Container BG={armyBG}>
      <ArmyImg src={armyImg} />
      <Contents>
        <Army>
          수도 군단 사령부
          <br />
          통신대대 통신병으로 성실히 군생활을 하였고
          <br />
          상병 3호봉부터 병장까지 분대장이라는 직책을 맡았습니다.
          <br />
          선후임들과 사건 사고없이 무사히 재미있게 군생활을 마무리 하였습니다.
        </Army>
      </Contents>
    </Container>
  );
}

export default Armys;
