import axios from "axios";
import React, { useEffect, useState } from "react";
import Prods from "./components/Prods";
import CafeCocktails from "./components/CafeCocktails";

function App() {
  const url =
    "https://cms.meamacollect.ge/meama-collect/api/client/ka";

    const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(url).then(response => {
      setProduct(response.data);
    });
  }, []);

  if (product) {
    return (
      <div>
        {console.log(product)}
        <Prods product={product} />
      </div>
    );
  }

  return (<div></div>);
}

export default App;

// if (product?.products?.length > 0) {
//   return (
//     <div>
//       {console.log(product)}
//       {/* <Prods
//       product={product}
//       />

//       <CafeCocktails
//       product={product}
//       /> */}
