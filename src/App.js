import axios from "axios";
import React, { useEffect, useState } from "react";
import Prods from "./components/Prods";

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
        <div id='container'>
          <div class='steam' id='steam1'>
            {" "}
          </div>
          <div class='steam' id='steam2'>
            {" "}
          </div>
          <div class='steam' id='steam3'>
            {" "}
          </div>
          <div class='steam' id='steam4'>
            {" "}
          </div>

          <div id='cup'>
            <div id='cup-body'>
              <div id='cup-shade'></div>
            </div>
            <div id='cup-handle'></div>
          </div>

          <div id='saucer'></div>

          <div id='shadow'></div>
        </div>
        {console.log(product)}
        {console.log(languages)}
        <Prods product={product} />
      </div>
    );
  }

  return <div></div>;
}

export default App;
