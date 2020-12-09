import React, { Component } from "react";
import ProductItem from "./productItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderProducts = () => {
    // const productArr = this.props.selectedCate
    //   ? this.props.productList.filter((item) => {
    //       return item.type === this.props.selectedCate;
    //     })
    //   : this.props.productList;

    // let productArr;
    // if (this.props.selectedCate) {
    //   productArr = this.props.productList.filter((item) => {
    //     return item.type === this.props.selectedCate;
    //   });
    // } else {
    //   productArr = this.props.productList;
    // }

    return this.props.productList
      .filter((item) => {
        return item.type === this.props.selectedCate;
      })
      .map((item) => {
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
    selectedCate: state.selectedCate,
  };
};

export default connect(mapStateToProps)(ProductList);
