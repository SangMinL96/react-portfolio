import React from "react";
import Slider from "react-animated-slider";
import "../node_modules/react-animated-slider/build/horizontal.css";
import Home from "./Home";
import Detail from "./Detail";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 100vh;
  }
`;

function App() {
  return (
    <Container>
      <Slider>
        <div class="homeContainer" key={0}>
          <Home />
        </div>
        <div key={1}>
          <Detail />
        </div>
      </Slider>
    </Container>
  );
}

export default App;
