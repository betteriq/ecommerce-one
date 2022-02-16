import React, { useEffect, useState } from "react";

const Test = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);
  console.log(state);
  return (
    <div>
      {" "}
      <div className="main-product">
        <div className="product container">
          <img src={state.image} alt={state.description} />
          <div className="product-second">
            <h2>{state.title}</h2>
            <p>{state.description}</p>
            <p>Price : {state.price} $</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
