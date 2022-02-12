import React, { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    const pop = document.querySelectorAll("button");
    pop.forEach((btn) =>
      btn.addEventListener("click", () => {
        if (btn.classList == "btn") {
          console.log("trueee");
          btn.classList.remove("btn");
        } else {
          console.log("nooooooot");
          btn.classList.add("btn");
        }
      })
    );
  });

  return (
    <div>
      <button className="btn">Toggle</button>
      <button className="btn" id="fofo">
        make true
      </button>
      <button className="btn">make false</button>
      <button>mamooli</button>
    </div>
  );
};

export default Contact;
