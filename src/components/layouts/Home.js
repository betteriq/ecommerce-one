import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Login from "./Login";


const Home = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div>
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
    </div>
  );
};

export default Home;
