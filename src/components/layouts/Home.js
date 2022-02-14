import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Login from "./Login";
import Modal from "./Modal";

const Home = (props) => {
  return (
    <Modal onhide={props.onhide}>
      <main>
        <h1>
          <Typewriter
            options={{
              strings: ["Shopping Center"],
              delay: 300,
              loop: true,
              autoStart: true,
            }}
          />
        </h1>
      </main>
    </Modal>
  );
};

export default Home;
