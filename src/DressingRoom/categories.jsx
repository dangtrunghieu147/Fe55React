import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "./actions";

class Categories extends Component {
  renderCate = () => {
    return this.props.cates.map((item) => {
      return (
        <button
          onClick={this.selectCategory(item.type)}
          key={item.type}
          className={
            item.type === this.props.selectedCate
              ? "btn btn-success"
              : "btn btn-secondary"
          }
        >
          {item.showName}
        </button>
      );
    });
  };

  selectCategory = (cateType) => () => {
    // const action = {
    //   type: "SELECT_CATEGORY",
    //   payload: cateType,
    // };
    this.props.dispatch(createAction("SELECT_CATEGORY", cateType));
  };

  render() {
    console.log(this.props.cates);
    return <div className="btn-group">{this.renderCate()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    //lấy dữ liệu categories trên store
    // chuyển đổi thành props tên categories để sd
    cates: state.categories,
    selectedCate: state.selectedCate,
  };
};

export default connect(mapStateToProps)(Categories);
