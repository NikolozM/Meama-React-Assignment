import axios from "axios";
import React, { useEffect, useState } from "react";
import Prods from "./components/Prods";
import ProductPage from "./pages/ProductPage";
import SubProductPage from "./pages/SubProductPage";
import { Routes, Route , Link} from "react-router-dom";

function App() {
  const one =
    "https://cms.meamacollect.ge/meama-collect/api/client/ka";

  const two =
    "https://cms.meamacollect.ge/meama-collect/api/client/languages";

  const requestOne = axios.get(one);
  const requstTwo = axios.get(two);
  const [product, setProduct] = useState(null);
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    axios.all([requestOne, requstTwo]).then(
      axios.spread((...responses) => {
        setProduct(responses[0].data);
        setLanguages(responses[1].data);
      })
    );
  }, []);

  if (product) {
    return (
      <div>
        <Link to={`/`}>
          <img src='https://shop.meama.ge/meama-images/thumbs/0001670_HORIZONTALURI-01.webp'></img>
        </Link>

        {console.log(product)}

        <Routes>
          <Route
            path='/'
            element={<Prods product={product} />}
          />

          <Route
            path='/ProductPage/:id'
            element={<ProductPage product={product} />}
          />
          <Route
            path='/SubProductPage/:id'
            element={<SubProductPage product={product} />}
          />
        </Routes>
      </div>
    );
  }

  return <div></div>;
}

export default App;
