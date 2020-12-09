const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT": {
      console.log(action.payload);
      //   state = {action.payload.type: action.payload.img}
      //   => state = {topclothes: "./images/clothes/topcloth2.png", botclothes: "./images/clothes/botcloth1.png"}

      //es6: literal object
      state = { ...state, [action.payload.type]: action.payload.img };
      console.log("selectedProducts: ", state);
      return state;
    }
    default:
      return state;
  }
};
export default reducer;

//1. component productItem, connect store gửi action, ko lấy dữ liệu về
// => ko cần mapStateToProps

//2. nhấn nút thử đồ, gửi action lên store,
/**
 *      type: SELECT_PRODUCT
 *      payload: {type: [prodType] , img: [prodImg]}
 */

/**
 * 3. trên reducer selectedProductReducer, xử lý action
 *  state ={topclothes: '...', botclothes: '...', shoes: '...'}
 */
