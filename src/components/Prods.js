import React, { useState } from "react";
import Prod from "./Prod";
import CafeCocktails from "./CafeCocktails";

function Prods({ product }) {
  return (
    <div>
      {product.map((singleItem) => {
        return (
          <ul key={singleItem.id}>
            <h4>{singleItem.name}</h4>

            {singleItem.products.length > 0 ? (
              <div className='media-scroller'>
                {singleItem.products.map((item) => {
                  return (
                    <li key={item.id}>
                      <Prod item={item} 
                      name={singleItem.name}
                      />
                    </li>
                  );
                })}
              </div>
            ) : (
              <CafeCocktails
                item={singleItem.subCategories}
              />
            )}
          </ul>
        );
      })}
    </div>
  );
}

export default Prods;
