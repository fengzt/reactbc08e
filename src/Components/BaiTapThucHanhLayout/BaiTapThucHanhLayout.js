import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapThucHanhLayout extends Component {
    render() { // Trong component đã định nghĩa phương thức render, cách viết này là đang override lại
        return (
            <div>
                <HeaderComponent />
                <BodyComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
