import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/CarBasic/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/CarBasic/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/CarBasic/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "Steel car",
      img: "./img/CarBasic/products/steel-car.jpg",
      price: 4000,
    },
  ];

  // state = {
  //   productDetail: {
  //     id: 1,
  //     name: "black car",
  //     img: "./img/CarBasic/products/black-car.jpg",
  //     price: 1000,
  //   },
  // };

  constructor(props) {
    super(props);
    this.state = {
      productDetail : {
        id: 1,
        name: "black car",
        img: "./img/CarBasic/products/black-car.jpg",
        price: 1000,
      },
    };
  }

  //setState định nghĩa tại component chứa state
  // truyền props viewDetail từ ExerciseCarStore -> ProductList -> ProductItem (nơi có nút sự kiện)
  viewDetail = (itemClick) => {
    console.log(itemClick);
    this.setState({
      productDetail: itemClick,
    });
  };

  // Đặt model ở ngoài cùng để tối ưu
  render() {
    // Vì ExerciseCarStore gián tiếp chứa giao diện thay đổi
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <ProductList productData={this.products} viewDetail={this.viewDetail} />
        <Modal productDetail={this.state.productDetail} />
      </div>
    );
  }
}
