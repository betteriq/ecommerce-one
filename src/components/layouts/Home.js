import React from "react";
import Typewriter from "typewriter-effect";


const Home = () => {
  
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
