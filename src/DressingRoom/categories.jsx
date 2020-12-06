import React, { Component } from "react";
import { connect } from "react-redux";

class Categories extends Component {
  renderCate = () => {
    return this.props.cates.map((item) => {
      return (
        <button key={item.type} className="btn btn-info">
          {item.showName}
        </button>
      );
    });
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
  };
};

export default connect(mapStateToProps)(Categories);
