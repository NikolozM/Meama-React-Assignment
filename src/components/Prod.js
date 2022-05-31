import React from "react";

function Prod({ item }) {
  if (item) {
    return (
      <div className="media-element">
          <img src={item?.mainPhoto} alt=''></img>
          <p>{item?.name}</p>
          <p>{item?.price} ლ</p>
      </div>
    );
  }
}

export default Prod;
