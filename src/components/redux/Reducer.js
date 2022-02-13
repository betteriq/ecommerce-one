const initialize = {
  number: 0,
};

const Reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      console.log("Add switch");
      return [...state, { action: action.payload }];
    default:
      return state;
  }
};
export default Reducer;
