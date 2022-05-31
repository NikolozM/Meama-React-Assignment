import React, { useEffect, useState } from "react";
import CafeCocktail from "./CafeCocktail";

function CafeCocktails({ product }) {
  if (product) {
    return (
      <div>
          <h1>{product[1]?.name}</h1>

          <div className="media-scroller snaps-inline">
          {product[1]?.subCategories[0].products.map((prod) => (
             <CafeCocktail item={prod} />
        ))}
        </div>
      </div>
    );
  }
}

export default CafeCocktails;