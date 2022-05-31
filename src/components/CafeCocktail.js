import React, { useEffect, useState } from "react";

function CafeCocktail({ item }) {
  if (item) {
    return (
      <div className="media-element">
          <img src={item.mainPhoto} alt=""></img>
          <p>{item.name}</p>
          <p>{item.price}ლ</p>
      </div>
    );
  }
}

export default CafeCocktail;