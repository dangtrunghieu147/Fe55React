import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { id, name } = this.props.cartItem.product;
    const { quantity } = this.props.cartItem;
    return (
      <tr>
        <td>1</td>
        <td>
          <img src="" alt="product" />
        </td>
        <td>Iphone 12 promax</td>
        <td>
          <button className="btn btn-info">+</button>1
          <button className="btn btn-info">-</button>
        </td>
        <td>90000</td>
        <td>12000</td>
      </tr>
    );
  }
}

export default CartItem;
