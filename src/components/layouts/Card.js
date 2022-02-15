import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Card = (props) => {
  const numbers = useSelector((state) => state);
  const [load, setLoad] = useState(false);
  let jadid = 0;
  useEffect(() => {
    if (jadid > 0) {
      setLoad(true);
    }
  });

  return (
    <Modal hiderLogin={props.hiderLogin}>
      <div className="main-login">
        <section className="login">
          <div className="box">
            <div className="container-form">
              <div className="form">
                <h2>Menu</h2>
                <div className="form-vsc">
                  <div className="card-ul">
                    <h4>
                      <ul>
                        {numbers.map((x) => {
                          jadid += x.qty * x.price;
                          return (
                            <li>
                              <p>Name : {x.title}</p>
                              <p>Numbers : {x.qty} x</p>
                              <img src={x.image} alt={x.description} />
                            </li>
                          );
                        })}
                      </ul>
                    </h4>
                    {load && <h5 className="ctf">Total Price : {jadid.toFixed(2)} $</h5>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Card;
