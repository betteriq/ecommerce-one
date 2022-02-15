import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);
  const [load, setLoad] = useState(false);
  // const [state, setState] = usePersistedState([]);
  useEffect(() => {
    console.log("hi");
    async function boy() {
      const response = await fetch("products.json");
      console.log(response);
      const json = await response.json();
      console.log(json);
      setState(json);
    }
    boy();
  }, []);
  const ages = [32, 33, 12, 40];
  const filtering = (cat) => {
    console.log("filtering");
    const vilter = state.filter((x) => x.category === cat);
    console.log(vilter);
    setFilter(vilter);
    setLoad(true);
  };
  console.log("test");
  return (
    <div>
      <div className="products">
        <h3>Products we Have</h3>

        <div className="products-btn">
          <button className="btn" onClick={() => filtering("men's clothing")}>
            Mens
          </button>
          <button className="btn" onClick={() => filtering("jewelery")}>
            Jewelery
          </button>
          <button className="btn" onClick={() => filtering("electronics")}>
            Electronics
          </button>
          <button className="btn" onClick={() => filtering("women's clothing")}>
            Women's clothing
          </button>
          <button onClick={() => setLoad(false)} className="btn">
            All
          </button>
        </div>
        <ul>
          {!load &&
            state.map((data) => {
              return (
                <li className="products-li" key={data.id}>
                  <img src={data.image} alt={data.description} />
                  <p>{data.title}</p>
                  <button className="btn">
                    <Link to={"product/" + `${data.id}`}>Sell</Link>
                  </button>
                </li>
              );
            })}
          {load &&
            filter.map((data) => {
              return (
                <li className="products-li" key={data.id}>
                  <img src={data.image} alt={data.description} />
                  <p>{data.title}</p>
                  <button className="btn">
                    <Link to={"product/" + `${data.id}`}>Sell</Link>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
