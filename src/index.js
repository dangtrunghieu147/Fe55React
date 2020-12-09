import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import categoryReducer from "./DressingRoom/reducers/category";
import productReducer from "./DressingRoom/reducers/product";
import selectedCateReducer from "./DressingRoom/reducers/selectedCate";
import selectedProductsReducer from "./DressingRoom/reducers/selectedProducts";

const rootReducer = combineReducers({
  // tên dữ liệu: tên reducer quản lý
  categories: categoryReducer,
  products: productReducer,
  selectedCate: selectedCateReducer,
  selectedProducts: selectedProductsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
