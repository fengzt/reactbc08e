import React from 'react'

export default function CardProduct(props) {
    // Trường phái rfc : react function component
    // Hướng dẫn cách dùng props bằng rfc
    // lưu ý: khác với rcc là: 
    // + có khai báo tham số CardProduct(props)
    // + chỗ khai báo bốc tách phần tử, không dùng this.props

    // Khai báo biến product bằng cách bốc tách phần tử của es6
    // Mỗi product sẽ hứng các object {id... name... img} trong mảng
    
    let { product } = props;

    return (
      <div className="card">
        <img src={product.img} alt="..." />
        <div className="card-body bg-dark text-white">
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
      </div>
    );
}
