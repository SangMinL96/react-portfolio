import React from "react";
import data from "../data.json";
import ProJactItems from "./ProJactItems";

function ProJact() {
  return <ProJactItems data={data.data} />;
}

export default ProJact;
