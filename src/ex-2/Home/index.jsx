import React, { Component } from "react";
import Carousel from "../Carousel";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

class HomeEx2 extends Component {
  render() {
    return (
      <div>
        <Header />

        <Carousel />

        <Content />

        <Footer />
      </div>
    );
  }
}

export default HomeEx2;
