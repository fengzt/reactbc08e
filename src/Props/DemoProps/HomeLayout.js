import React, { Component } from "react";
import Footer from "./Footer";
import ProductDemo from "./ProductDemo";
import CardProduct from "./CardProduct";
export default class HomeLayout extends Component {
  // Đối với arr hoặc string, object vẫn dùng được props
  arrProduct = [
    {
      id: 1,
      name: "Iphone",
      price: 1000,
      img: "https://picsum.photos/id/1/200/200",
    },
    {
      id: 2,
      name: "Iphone X",
      price: 2000,
      img: "https://picsum.photos/id/2/200/200",
    },
    {
      id: 3,
      name: "Iphone XS",
      price: 3000,
      img: "https://picsum.photos/id/3/200/200",
    },
  ];

  render() {
    /*
        HomeLayout được gọi là Component cha
        Trong component cha có thể gọi bất kì props nào với tên gì: bgColor, content,...
        Khi gọi trong component con là Footer, thì phải truyền đúng this.props.bgColor, this.props.content
        */
    return (
      <div className="container-fluid">
        <h3>Home Layout</h3>
        <input type="text" />

        <Footer bgColor="black" content="FrontEnd" />
        <Footer bgColor="red" content="Backend" />
        <Footer bgColor="yellow" content="FullStack" />
        <Footer bgColor="green" content="Cybersoft" />
        <hr />
        <h3>Product</h3>
        <div className="row">
          <div className="col-4">
            {/* <ProductDemo productName="Iphone" price="1000" /> */}
            <ProductDemo product={this.arrProduct[0]} />
          </div>
          <div className="col-4">
            {/* <ProductDemo productName="Iphone X" price="2000" /> */}
            <ProductDemo product={this.arrProduct[1]} />
          </div>
          <div className="col-4">
            {/* <ProductDemo productName="Iphone XS" price="3000" /> */}
            <CardProduct product={this.arrProduct[2]} />
          </div>
        </div>
      </div>
    );
  }
}
