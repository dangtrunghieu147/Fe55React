import React, { Component } from "react";

class DemoDatabinding extends Component {
  fullName = "Dang trung hieu";
  age = 12;

  // hàm bình thường
  showName = () => {
    alert("Dang trung hieu");
  };

  //hàm có tham số đầu vào
  showNameWithParams = (name) => () => {
    alert(name);
  };
  //closure

  //hàm có con trỏ this
  showNameWithThis() {
    alert(this.fullName);
  }

  state = {
    isOk: true,
    // a: 1,
    // b: 2,
  };

  decideDestination = () => {
    if (this.state.isOk) {
      return <h1>GO TO CYBERSOFT</h1>;
    } else {
      return <h1>GO TO CYBERCORE</h1>;
    }
  };

  // onChangeIsOk(val) {
  //   return function () {
  //     this.isOk = val;
  //   };
  // }

  onChangeIsOk = (val) => () => {
    this.setState({
      isOk: val,
    });
  };

  render() {
    return (
      <div>
        <h1>------------schedule-------------</h1>
        <button onClick={this.onChangeIsOk(true)} className="btn btn-warning">
          Oke
        </button>
        <button onClick={this.onChangeIsOk(false)} className="btn btn-info">
          Sick
        </button>

        {this.decideDestination()}
      </div>
    );
  }
}

export default DemoDatabinding;
