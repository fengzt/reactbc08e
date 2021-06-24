import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <BannerComponent />
                <ItemComponent />
                <FooterComponent/>
            </div>
        )
    }
}
