import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
// Nếu để trong src / assets thì cần import riêng từng tấm hình mới hiển thị được ra html
// Dự án thực tế là bỏ img vào assets, không để trong file public (chỉ để tiện làm bài tập)
// import img from '../../assets/img/gameXucXac/1.png'

// Ảnh hưởng all ứng dụng, kể cả App.js
import './BaiTapGameXucXac.css'
export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center mt-5 display-4">Bài tập game xúc xắc</h3>
                {/* <img src="./img/gameXucXac/1.png"/> // Link theo file build */}
                <XucXac />
                <KetQuaTroChoi/>
            </div>
        )
    }
}
