import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Itemss from "./Itemss";

const Container = styled.div``;
const Items = styled(Link)`
  width: 200px;
  height: 200px;
`;
const Item = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
`;
function ProJactItems({ data }) {
  return (
    <>
      <Container>
        {data.map((item) => (
          <Items to={`/projact/${item.id}`} key={item.id}>
            <Item id={item.id} bg={item.image} />
          </Items>
        ))}
      </Container>
      <Route path="/projact/:id" component={Itemss} />
    </>
  );
}

export default ProJactItems;
