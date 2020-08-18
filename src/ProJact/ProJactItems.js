import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, Route } from "react-router-dom";
import Itemss from "./Itemss";
import Coverflow from "react-coverflow";
const projactIn = keyframes`
0%{
  opacity: 0;
 
}
100%{
  opacity: 1;
  
}
`;
const PJcontainer = styled.section`
  display: flex;
  width: 100%;
  height: 94vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #020202;
  animation: ${projactIn} 2s ease-in-out;
  .slider {
    width: 100%;
  }
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
const Items = styled(Link)`
  width: 100%;
  height: 200px;
  &:hover {
    transform: scale(1.03);
    opacity: 80%;
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
      <PJcontainer>
        <Title>ProJact</Title>
        <Scroll>
          <ScrollMovig></ScrollMovig>
        </Scroll>
        <ScrollText>Scroll</ScrollText>
        <Coverflow
          width="1400"
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
            <Items to={`/projact/${item.id}`} key={item.id}>
              <Item id={item.id} bg={item.image} />
            </Items>
          ))}
        </Coverflow>
      </PJcontainer>
      <Route path="/projact/:id" component={Itemss} />
    </>
  );
}

export default ProJactItems;
