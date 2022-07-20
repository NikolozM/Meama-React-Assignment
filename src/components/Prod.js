import React from "react";
import { Link } from "react-router-dom";

function Prod({ item, name }) {
  return (
    <div
      className='media-element'
      style={{ marginTop: "30px" }}
    >
      <Link className='media-element link' to={`/ProductPage/${item.id}`}>
      <img
        style={{
          marginTop:
            name === "ორცხობილები" ||
            name === "მეამას პროდუქტები"
              ? "10px"
              : "-20px",
        }}
        src={item?.mainPhoto}
        alt=''
      ></img>
      <p>{item?.name}</p>
      <p>{item?.price} ლ</p>
      </Link>
    </div>
  );
}

export default Prod;
