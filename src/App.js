import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/Navbar";
import Products from "./components/layouts/Products";
import Contact from "./components/layouts/Contact";
import About from "./components/layouts/About";
import Product from "./components/layouts/Product";
import { Provider } from "react-redux";
import created from "./components/redux/created";


const App = () => {
  return (
    <Provider store={created}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
// import React from "react";
// import { Component } from "react";

// class App extends Component {
//   state = {
//     user: "",
//     rememberMe: false,
//   };

//   handleChange = (event) => {
//     const input = event.target;
//     const value = input.type === "checkbox" ? input.checked : input.value;

//     this.setState({ [input.name]: value });
//   };

//   handleFormSubmit = () => {
//     const { user, rememberMe } = this.state;
//     localStorage.setItem("rememberMe", rememberMe);
//     localStorage.setItem("user", rememberMe ? user : "");
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>
//             User:{" "}
//             <input
//               name="user"
//               value={this.state.user}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             <input
//               name="rememberMe"
//               checked={this.state.rememberMe}
//               onChange={this.handleChange}
//               type="checkbox"
//             />{" "}
//             Remember me
//           </label>
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
