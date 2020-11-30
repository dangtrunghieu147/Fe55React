import React, { Component } from "react";
import IconRed from "../assets/img/icon-red.jpg";
import IconBlack from "../assets/img/icon-black.jpg";
import IconSilver from "../assets/img/icon-silver.jpg";
import IconSteel from "../assets/img/icon-steel.jpg";
import RedCar from "../assets/img/red-car.jpg";
import BlackCar from "../assets/img/black-car.jpg";
import SilverCar from "../assets/img/silver-car.jpg";
import SteelCar from "../assets/img/steel-car.jpg";

class ExerciseChangeCarColor extends Component {
  state = {
    carImage: RedCar,
  };

  //create 1 function onChangeColor(img){ }

  onChangeColor = (img) => () => {
    this.setState(
      {
        carImage: img,
      },
      () => {
        console.log(this.state.carImage);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <img src={this.state.carImage} className="w-100" alt="car" />
          </div>
          <div className="col-3">
            <img
              onClick={this.onChangeColor(RedCar)}
              src={IconRed}
              alt="car"
              className="w-25 d-block mb-3"
            />
            <img
              onClick={this.onChangeColor(BlackCar)}
              src={IconBlack}
              alt="car"
              className="w-25 d-block mb-3"
            />
            <img
              onClick={this.onChangeColor(SilverCar)}
              src={IconSilver}
              alt="car"
              className="w-25 d-block mb-3"
            />
            <img
              onClick={this.onChangeColor(SteelCar)}
              src={IconSteel}
              alt="car"
              className="w-25 d-block mb-3"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseChangeCarColor;
