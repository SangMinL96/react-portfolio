import React from "react";
import styled from "styled-components";
import data from "../data.json";
import ProJactItems from "./ProJactItems";

const Container = styled.div`
  position: relative;
  margin-top: 1.8em;
  width: 100%;
  height: 91.3vh;
`;
function ProJact() {
  return (
    <Container>
      <ProJactItems data={data.data} />
    </Container>
  );
}

export default ProJact;
