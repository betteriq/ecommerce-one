import React, { useState } from "react";
import Typewriter from "typewriter-effect";


const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <main>
        <h1>
          <Typewriter
            options={{
              strings: ["Shopping dff"],
              delay: 300,
              loop: true,
              autoStart: true,
            }}
          />
        </h1>
      </main>
      <button onClick={() => setOpen(true)}>Open Modal</button>
    </div>
  );
};

export default Home;
