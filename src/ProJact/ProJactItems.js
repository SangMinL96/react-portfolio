import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, Route } from "react-router-dom";
import Items from "./Items";
import Coverflow from "react-coverflow";
const projactIn = keyframes`
0%{
  width: 0%;
  
 
}50%{
  width: 50%;
  
}
100%{
  width: 0%;
  
  
}
`;

const sliderIn = keyframes`
0%{
  opacity:0;
}100%{
  opacity:1;
}
`;
const fadeIn = keyframes`
0%{
  opacity: 0;
  top:5px;
}
100%{
  opacity: 1;
  top:50px;
}
`;
const AniContainer1 = styled.div`
  position: absolute;
  width: 0%;
  height: 94vh;
  left: 0%;
  background-color: #260808;
  z-index: 5;
  animation: ${projactIn} 2s linear;
`;
const AniContainer2 = styled.div`
  position: absolute;
  width: 0%;
  height: 94vh;
  right: 0%;
  background-color: #260808;
  z-index: 5;
  animation: ${projactIn} 2s linear;
`;
const PJcontainer = styled.section`
  opacity: 0;
  display: flex;
  width: 100%;
  height: 94vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #020202;
  animation: ${sliderIn} 1s 1s forwards;
`;
const Title = styled.h3`
  font-size: 4rem;
  font-weight: bold;
`;
const Scroll = styled.div`
  position: relative;
  margin-top: 1em;

  width: 35px;
  height: 70px;
  background-color: #353b48;
  border-radius: 30px;
`;

const ScrollMovig = styled.div`
  position: absolute;
  top: 5px;
  width: 8px;
  height: 8px;
  left: 52%;
  border-radius: 100%;
  background-color: white;
  transform: translate(-50%, 50%);
  animation: ${fadeIn} 1.5s infinite;
`;
const ScrollText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
const ItemLink = styled(Link)`
  width: 100%;
  height: 200px;
  text-align: center;
  &:hover {
    transform: scale(1.03);
    opacity: 80%;
  }
  h3 {
    position: absolute;
    width: 100%;
    top: -30px;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 14px;
  }
`;
const Item = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
`;

function ProJactItems({ data }) {
  return (
    <>
      <AniContainer1 />
      <AniContainer2 />
      <PJcontainer>
        <Title>ProJact</Title>
        <Scroll>
          <ScrollMovig></ScrollMovig>
        </Scroll>
        <ScrollText>Scroll</ScrollText>
        <Coverflow
          width="1250"
          height="550"
          className="slider"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}
          currentFigureScale={1.85}
        >
          {data.map((item) => (
            <ItemLink to={`/react-portfolio/projact/${item.id}`} key={item.id}>
              <h3>{item.title}</h3>
              <Item id={item.id} bg={item.image} />
            </ItemLink>
          ))}
        </Coverflow>
      </PJcontainer>
      <Route path="/react-portfolio/projact/:id" component={Items} />
    </>
  );
}

export default ProJactItems;
