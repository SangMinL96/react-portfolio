import React from "react";
import styled from "styled-components";
import schoolBG from "../Image/profile/schoolbg.jpg";
import schoolImg from "../Image/profile/school.png";

const Container = styled.section`
  width: 800px;
  height: 500px;
  background-image: url(${(props) => props.BG});
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const EducationImg = styled.img`
  width: 400px;
  height: 360px;
  opacity: 0.8;
`;
const Contents = styled.div`
  width: 40%;
`;

const Education = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  span {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 2em;
  }
`;
function Educations() {
  return (
    <Container BG={schoolBG}>
      <EducationImg src={schoolImg} />
      <Contents>
        <Education>
          망포고등학교
          <br />
          <span>(2013 ~ 2015)</span>
          <br />
          용인송담대학교(정보통신학과)
          <br />
          <span>(2015 ~ 2020)</span>
          <br />
          패스트캠퍼스
          <br />
          <span>(React과정 수료)</span>
          <br />
          노마드코더
          <br />
          <span>(HTML,REACT,ReactNative, CloneInstagram 수강)</span>
          <br />
          자격증
          <br />
          <span>(정보처리기능사,네트워크관리사2급,컴퓨터활용능력2급)</span>
        </Education>
      </Contents>
    </Container>
  );
}

export default Educations;
