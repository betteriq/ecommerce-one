const initialize = {
  number: 0,
};

const Reducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case "add":
      console.log("Add switch");
      return { number: state.number + 1 };
    default:
      return state;
  }
};
export default Reducer;
