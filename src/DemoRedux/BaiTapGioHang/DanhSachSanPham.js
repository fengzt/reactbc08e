import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    renderSanPham = () => {
        let { mangSanPham } = this.props;
        return mangSanPham.map((sanPham, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPham sanPham={sanPham}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderSanPham()}
            </div>
        )
    }
}
