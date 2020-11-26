import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

class HomeEx1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <div className="w-75">
            <Content />
          </div>
          <div className="w-25">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeEx1;
