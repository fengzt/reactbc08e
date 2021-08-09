import React, { Component } from 'react'

export default class ProductItemCart extends Component {
    render() {
        let { product, themGioHang } = this.props;
        return (
            <div className="card">
                <img height={300} className="w-100" src={product.hinhAnh} alt="..." />
                <div className="card-body">
                    <h3>{product.tenSP}</h3>
                    <p>{product.giaBan.toLocaleString()}</p>
                    <button onClick={()=> themGioHang(product)} className="btn btn-danger">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
