import React, { Component } from "react";
import ProductItem from "./productItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.productList.map((item) => {
      return (
        <div className="col-4" key={item.id}>
          <ProductItem product={item} />
        </div>
      );
    });
  };
  render() {
    return <div className="row py-4">{this.renderProducts()}</div>;
  }
}

/**
 *
 * 1.connect store dữ liệu products
 * 2.Hàm map render ProductItem
 * 3.truyền props vào ProductItem ,render giao diện động
 */

const mapStateToProps = (state) => {
  return {
    productList: state.products,
  };
};

export default connect(mapStateToProps)(ProductList);
