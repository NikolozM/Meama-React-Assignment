import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SubProductPage({ product }) {
  const { id } = useParams();

  const arr = product.map((item) =>
    item.subCategories[0]?.products.filter(
      (items) => items.id.toString() === id
    )
  );

  const item = arr.filter((item) => item?.length > 0);

  const singleItem = item[0][0];

  console.log(arr);

  return (
    <div>
      <div style={{ width: "20%" }}>
        {" "}
        <img
          style={{ width: "100%" }}
          src={singleItem.mainPhoto}
          alt=''
        ></img>
        <p>{singleItem.name}</p>
      </div>
      {singleItem.capsuleProducts.map((item) => {
        return (
          <div>
            <img
              style={{
                backgroundColor: item.bgColor,
                borderRadius: "50%",
                padding: "20px",
              }}
              src={item.imgUrl}
              alt=''
            ></img>
            <p>{item.name}</p>
            {item.specifications.map((spec) => {
              return (
                <p>
                  {spec.name} {spec.value}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
