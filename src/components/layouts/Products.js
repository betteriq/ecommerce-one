import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [state, setState] = useState([]);
  // const [state, setState] = usePersistedState([]);
  useEffect(() => {
    console.log("hi");
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((response) => setState(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul className="products-ul">
        {state.map((data) => {
          return (
            <li className="products-li" key={data.id}>
              <img src={data.image} alt={data.description} />
              <p>{data.title}</p>
              <button className="btn">
                <Link to={"product/"+`${data.id}`}>Sell</Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
