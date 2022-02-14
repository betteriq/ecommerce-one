import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);
  const [load, setLoad] = useState(false);
  // const [state, setState] = usePersistedState([]);
  useEffect(() => {
    console.log("hi");
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((response) => setState(response))
      .catch((err) => console.log(err));
  }, []);
  const ages = [32, 33, 12, 40];
  const filtering = (cat) => {
    console.log("filtering");
    const vilter = state.filter((x) => x.category === cat);
    console.log(vilter);
    setFilter(vilter);
    setLoad(true);
  };

  return (
    <div>
      <div className="products">
        <button className="btn" onClick={() => filtering("men's clothing")}>
          mens
        </button>
        <button className="btn" onClick={() => filtering("jewelery")}>
          jewelery
        </button>
        <button className="btn" onClick={() => filtering("electronics")}>
          electronics
        </button>
        <button className="btn" onClick={() => filtering("women's clothing")}>
          women's clothing
        </button>
        <button onClick={() => setLoad(false)} className="btn">All</button>
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
