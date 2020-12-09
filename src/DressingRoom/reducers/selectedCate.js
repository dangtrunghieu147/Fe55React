const initialState = "topclothes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY": {
      state = action.payload;
      console.log("new selectedCate on Store:", state);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
