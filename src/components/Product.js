import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const param = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    console.log("product");
    fetch(`https://fakestoreapi.com/products/${param.id}`).then((response) =>
      response.json().then((data) => setState(data))
    );
  }, []);
  console.log(param);
  return (
    <div className="main-product">
      <div className="product container">
        <img src={state.image} alt={state.description} />
        <div className="product-second">
          <h2>{state.title}</h2>
          <p>{state.description}</p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
