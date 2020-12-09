import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "./actions";

class ProductItem extends Component {
  onSelectProduct = () => {
    this.props.dispatch(
      createAction("SELECT_PRODUCT", {
        type: this.props.product.type,
        img: this.props.product.imgSrc_png,
      })
    );

    // this.props.dispatch({
    //   type: "SELECT_PRODUCT",
    //   payload: {
    //     type: this.props.product.type,
    //     img: this.props.product.imgSrc_png,
    //   },
    // });
  };
  render() {
    const { imgSrc_jpg, name } = this.props.product;
    return (
      <div className="card mb-4">
        <img src={imgSrc_jpg} alt="product" />
        <div className="card-body">
          <p>{name}</p>
          <button onClick={this.onSelectProduct} className="btn btn-success">
            Thử đồ
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
