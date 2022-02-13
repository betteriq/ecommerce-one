const cart = [];

const Reducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "add":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        console.log("hast");
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        console.log("nist");
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
    default:
      return state;
  }
};
export default Reducer;
