import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    // console.log(this.props.movie);

    // destructuring
    const { hinhAnh: img, tenPhim, moTa } = this.props.movie;
    return (
      <div className="card">
        <img src={img} alt="movie" className="w-100" />
        <div className="card-body">
          <h1>{tenPhim}</h1>
          <p>{moTa}</p>
        </div>
      </div>
    );
  }
}

export default MovieItem;
