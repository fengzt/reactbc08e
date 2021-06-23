import React, { Component, Fragment } from 'react'

export default class Databinding extends Component {
    // thuộc tính
    name = 'Feng';
    img = 'https://picsum.photos/200/200';
    
    // Phương thức tự xây dựng
    // Gọi được mọi nơi trong lớp đối tượng dòng 3 - hết render
    renderCard = () => {
        let product = {
            id: 1,
            name: 'Iphone',
            price: '1000',
            img: 'https://picsum.photos/id/10/200/200'
        }
        // Hàm là function gọi trong render
        var abc = function () { };
        return <div className="card w-25">
            <img src={product.img} alt="..." />
            <div className="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hàng</button>
            </div>
        </div>
    }
    
    render() {
        // Khai báo biến, hàm (KHai báo sẽ có từ khóa let, var, const và được khai báo trong hàm và phương thức)
        let tenHocVien = 'Feng';
        // {}: được gọi là dấu data binding trong react
        return (
            <Fragment>
            <div className="container">
                <div id="content">{tenHocVien}</div>
                <div id="content">{this.name}</div>
                <div className="card w-25">
                        <img src={this.img} alt="..." />
                    </div>
                    {this.renderCard()}
                </div>
            </Fragment>
        )
    }
}
