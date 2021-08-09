import React, { Component } from "react";

export default class RenderWithMap extends Component {
  //Muốn trả về 2 giá trị trở lên => return về mảng [], hoặc object {}
  // Return của render react là 1 đối tượng JSX. Nếu nhiều, sẽ chứa trong mảng []
  // Thẻ đồng cấp thường dùng trong render mảng

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

  renderProduct() {
    // Kì vọng khi chạy hàm này sẽ ra 1 mảng [tr] (đối tượng của JSX)
    // Cách 1
    // let content = [];
    // for (let i = 0; i < this.arrProduct.length; i++){
    //     // Mỗi lần duyệt lấy ra 1 đối tượng product trong arrProduct

    //     let product = this.arrProduct[i];

    //     // Từ đối đượng product => Tạo ra 1 tag JSX
    //     let tagTr = <tr>
    //         <td>{product.id}</td>
    //         <td>{product.name}</td>
    //         <td><img width={50} height={50} src={product.img} alt='...'/></td>
    //         <td>{product.price}</td>
    //     </tr>
    //     // Là mảng nên phải dùng push, không phải là object như template string - `` (dùng +=)
    //     content.push(tagTr);
    // };
    // return content;

    // Cách 2
    let content = this.arrProduct.map((product, index) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <img width={50} height={50} src={product.img} alt="..." />
          </td>
          <td>{product.price}</td>
        </tr>
      );
    });

    // Lưu ý phải có return content thì hàm renderProduct mới trả giá trị về
    return content;
  }

  renderProductCard() {
    let content = this.arrProduct.map((product, index) => {
      return (
        <div className="col-4">
          <img src={product.img} alt="..." />
          <div className="card-body bg-dark text-white">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        </div>
      );
    });
    return content; // [<div className="col-4">...</div><div className="col-4">...</div>]
  }

  render() {
    // console.log(<div>abc</div>)
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderProduct()}
            {/* [<tr><td>1</td><td>Iphone</td>....</tr>] */}
          </tbody>
        </table>
        <hr />

        <h3>Danh sách sản phẩm 2</h3>
        <div className="row">{this.renderProductCard()}</div>
      </div>
    );
  }
}
