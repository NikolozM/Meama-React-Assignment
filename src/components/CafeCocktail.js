import React, { useState } from "react";
import { Link } from "react-router-dom";

function CafeCocktail({ itm }) {
  return (
    <div
      className='media-scroller'
      style={{ marginTop: "0px" }}
    >
      {itm.products.map((image) => {
        return (
          <div
            className='media-element roll-out'
            style={{ marginTop: "40px" }}
          >
            <Link
              className='media-element link'
              to={`/SubProductPage/${image.id}`}
            >
              <img
                style={{ marginTop: "-20px" }}
                src={image.mainPhoto}
                alt=''
              ></img>
              <p style={{}}>{image.name}</p>
              <p style={{}}>{image.price} ლ</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default CafeCocktail;
