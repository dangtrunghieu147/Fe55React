import React, { Component } from "react";

class CartItem extends Component {
  onDeleteItem = () => {
    this.props.removeFromCart(this.props.cartItem);
  };

  render() {
    const { id, name, img, price } = this.props.cartItem.product;
    const { quantity } = this.props.cartItem;
    return (
      <tr>
        <td>{id}</td>
        <td>
          <img src={img} style={{ width: 100 }} alt="product" />
        </td>
        <td>{name}</td>
        <td>
          <button className="btn btn-info">+</button>
          {quantity}
          <button className="btn btn-info">-</button>
        </td>
        <td>{price}</td>
        <td>{quantity * price}</td>
        <td>
          <button onClick={this.onDeleteItem} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
