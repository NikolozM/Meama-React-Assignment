import React, { useState } from "react";
import CafeCocktail from "./CafeCocktail";
import SubCategory from "./SubCategory";

function CafeCocktails({ item }) {
  const [sub, setSub] = useState("ყველა");

  function change(name) {
    setSub(name);
  }
  return (
    <div>
      <div>
        {item.map((items) => {
          return (
            <span className="sub-categories" style={{marginRight: "15px",cursor: 'pointer'}}onClick={() => change(items.name)}>
              <SubCategory items={items} />
            </span>
          );
        })}
      </div>
      <div>
        {item.map((itm) => {
          return itm.name === sub ? (
            <CafeCocktail itm={itm}
            key={Math.random()}
             />
          ) : null;
        })}
      </div>
    </div>
  );
}
export default CafeCocktails;
