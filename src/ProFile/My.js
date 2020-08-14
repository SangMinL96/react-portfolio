import React from "react";
import styled from "styled-components";
import myBG from "../Image/profile/bg.jpg";
import myImg from "../Image/profile/myimg.png";
import {
  IoMdPerson,
  IoMdPersonAdd,
  IoMdCall,
  IoIosMail,
  IoIosHome,
  IoLogoGameControllerB,
  IoMdGlasses,
} from "react-icons/io";
const Container = styled.section`
  width: 800px;
  height: 500px;
  background-image: url(${(props) => props.BG});
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MyImg = styled.img`
  width: 280px;
  height: 300px;
`;
const Contents = styled.div`
  width: 40%;
`;

const Profile = styled.div`
  line-height: 1.8;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  color: #1e272e;
`;
function My() {
  return (
    <Container BG={myBG}>
      <MyImg src={myImg} />
      <Contents>
        <Profile>
          <IoMdPerson />
          &nbsp; 이상민 (Lee Sang Min)
          <br />
          <IoMdPersonAdd />
          &nbsp; 1996년 12월 6일
          <br />
          <IoMdCall />
          &nbsp; 010-3794-3814
          <br />
          <IoIosMail /> &nbsp;hwon3794@gmail.com
          <br />
          <IoIosHome />
          &nbsp; 경기도 수원시 영통
          <br />
          <IoLogoGameControllerB />
          &nbsp; 컴퓨터, 활동적인 스포츠(배드민턴,볼링,풋살등등)
          <br />
          <IoMdGlasses />
          &nbsp; 좌우명 : 구현이 되지않으면 될때까지 컴퓨터 앞을 떠나지말자.
        </Profile>
      </Contents>
    </Container>
  );
}

export default My;
