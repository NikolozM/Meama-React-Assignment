import React from "react";

function Prod({ item, name }) {
  console.log(name);
  return (
    <div
      className='media-element'
      style={{ marginTop: "30px" }}
    >
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
    </div>
  );
}

export default Prod;
