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

  var decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement("div");

    function decodeHTMLEntities(str) {
      if (str && typeof str === "string") {
        // strip script/html tags
        str = str.replace(
          /<script[^>]*>([\S\s]*?)<\/script>/gim,
          ""
        );
        str = str.replace(
          /<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,
          ""
        );
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = "";
      }

      return str;
    }

    return decodeHTMLEntities;
  })();

  return (
    <div>
      <div className='product-description'>
        <div className='product-img'>
          {" "}
          <img src={singleItem.mainPhoto} alt=''></img>
        </div>
        <div>
          <p>{singleItem.name}</p>
          <p>{singleItem.title}</p>
          {decodeEntities(singleItem.description)}

          <p style={{ marginTop: "30px" }}>
            {decodeEntities(singleItem.shortDescription)}
          </p>
        </div>
      </div>

      {singleItem.capsuleProducts.map((item) => {
        return (
          <div className='capsule-container'>
            <div className='capsule-img'>
              <img
                style={{
                  backgroundColor: item.bgColor,
                }}
                src={item.imgUrl}
                alt=''
              ></img>
            </div>
            <div>
              <p>{item.name}</p>
              {item.specifications.map((spec) => {
                return (
                  <p>
                    {spec.name} {spec.value}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
