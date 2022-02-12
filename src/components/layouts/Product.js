import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {Add} from "../redux/action"

const Product = () => {
  const dispatcher=useDispatch()
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
          <button className="btn" onClick={()=>dispatcher(Add())}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
