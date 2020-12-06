import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { imgSrc_jpg, name } = this.props.product;
    return (
      <div className="card mb-4">
        <img src={imgSrc_jpg} alt="product" />
        <div className="card-body">
          <p>{name}</p>
          <button className="btn btn-success">Thử đồ</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
