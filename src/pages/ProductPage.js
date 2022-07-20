import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductPage({ product }) {
  const { id } = useParams();

  const arr = product.map((item) =>
    item.products.filter(
      (items) => items.id.toString() === id
    )
  );
  const item = arr.filter((item) => item.length > 0);

  const singleItem = item[0][0];

  console.log(singleItem);

  //decoding html entities

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderBottom: "2px solid gray",
        }}
      >
        <div style={{ width: "15%" }}>
          {" "}
          <img
            style={{ width: "100%" }}
            src={singleItem.mainPhoto}
            alt=''
          ></img>
        </div>
        <div style={{ width: "30%" }}>
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
          <div style={{display:"flex", justifyContent:"space-between", margin:"30px 330px",borderBottom:"3px inset gray"}}>
            <div style={{width:"15%"}}>
              <img
                style={{
                  backgroundColor: item.bgColor,
                  borderRadius: "50%",
                  padding: "20px",
                  width:"100%"
                }}
                src={item.imgUrl}
                alt=''
              ></img>
            </div>
            <div style={{width:"15%"}}>
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
