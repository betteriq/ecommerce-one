import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const param = useParams();
  const [state, setState] = useState();
  useEffect(() => {
    console.log("product");
    fetch(`https://fakestoreapi.com/products/${param.id}`).then((response) =>
      response.json().then((data) => setState(data))
    );
  });
  console.log(param);
  return (
    <div>
      <h1>{state.title}</h1>
      <img src={state.image} alt={state.description} />
    </div>
  );
};

export default Product;
