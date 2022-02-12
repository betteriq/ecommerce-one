const initialize = {
  number: 0,
};

const Reducer = (state = initialize, action) => {
  switch (action.type) {
    case "add":
        console.log("adddddddd");
      return { number: state.number + 1 };
    default:
      return state;
  }
};
export default Reducer;
