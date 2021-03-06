import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext();

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h2 className="text">Grandpa</h2>
        <button onClick={handleBuyAHouse}>Buy a House</button>
        <p>House: {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
