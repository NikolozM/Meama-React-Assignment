import React, { useState } from "react";

function CafeCocktail({ itm }) {
  return (
    <div className='media-scroller' style={{marginTop:"0px"}}>
      {itm.products.map((image) => {
        return (
          <div className='media-element roll-out' style={{marginTop:"40px"}}>
            <img
              style={{marginTop:"-20px"}}
              src={image.mainPhoto}
              alt=''
            ></img>
            <p style={{}}>{image.name}</p>
            <p style={{}}>{image.price} ლ</p>
          </div>
        );
      })}
    </div>
  );
}
export default CafeCocktail;
