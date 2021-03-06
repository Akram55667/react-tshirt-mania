import React from "react";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";

const Father = ({ house, ornament }) => {
  return (
    <div>
      <h4>Father</h4>
      <p>house:{house}</p>
     <div style={{display:'flex'}}>
     <MySelf house={house} ornament={ornament}></MySelf>
      <Brother house={house}></Brother>
      <Sister house={house}></Sister>
     </div>
    </div>
  );
};

export default Father;
