import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { prd } = this.props;
    return (
      <div className="card">
        <img src={prd.image} alt="..." />
        <div className="card-body">
                <h5 style={{height:'45'}}>{prd.name}</h5>
                <span>{prd.price} $</span>
                <br/>
          <button
            className="p-2 mt-2"
            style={{ backgroundColor: "#000", border: "none", color: "#fff" }}
          >
            Add to cards
          </button>
        </div>
      </div>
    );
  }
}
