import React from "react";
import Prod from "./Prod";

function Prods({ product }) {
  return (
    <div className="media-scroller">
      {product.map((prev) => {
        return (
          <ul key={prev.id}>
            <h4>{prev.name}</h4>
            <div>
              {prev.products.map((item) => {
                return (
                  <li key={item.id}>
                    <Prod item={item} />
                  </li>
                );
              })}
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default Prods;