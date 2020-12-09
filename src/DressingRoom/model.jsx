import React, { Component } from "react";
import { connect } from "react-redux";
import "./model.css";

class Model extends Component {
  render() {
    return (
      <div
        className="contain"
        style={{
          backgroundImage: "url(images/background/background_998.jpg)",
        }}
      >
        <div
          className="body"
          style={{
            backgroundImage: "url(images/allbody/bodynew.png)",
          }}
        />
        <div
          className="model"
          style={{
            backgroundImage: "url(images/model/1000new.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: "url(images/allbody/bikini_branew.png)",
          }}
        />
        <div
          className="bikinibottom"
          style={{
            backgroundImage: "url(images/allbody/bikini_pantsnew.png)",
          }}
        />
        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: `url(${this.props.selectedProducts.topclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="bikinibottom"
          style={{
            backgroundImage: `url(${this.props.selectedProducts.botclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${this.props.selectedProducts.shoes})`,
            backgroundSize: "cover",
            width: "500px",
            height: "1000px",
            position: "absolute",
            bottom: "-38.5%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1",
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProducts: state.selectedProducts,
  };
};

export default connect(mapStateToProps)(Model);
