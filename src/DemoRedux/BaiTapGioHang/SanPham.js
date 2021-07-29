import React, { Component } from 'react'
// Muốn dùng phải kết nối với redux
import { connect } from 'react-redux';

// Bỏ export default
class SanPham extends Component {
    render() {
        // console.log(this.props);
        
        let { sanPham } = this.props;
        return (
            <div className="card">
                <img src={sanPham.hinhAnh} className="w-100" height={300} alt="..." />
                <div className="card-body">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{(sanPham.giaBan.toLocaleString())}</p>
                    <button className="btn btn-outline-success" onClick={() => {
                        // Cách gửi action từ component đến redux để setState
                        const action = {
                            type: "THEM_GIO_HANG",
                            // Thuộc tính bắt buộc, là nhãn đánh dấu để redux xử lý
                            sanPhamClick: sanPham
                        }

                        // Đưa dữ liệu lên redux
                        this.props.dispatch(action);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

// Kết nối redux => clg sinh ra dispatch
export default connect()(SanPham);
