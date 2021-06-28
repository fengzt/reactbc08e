import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <BannerComponent />
                <ItemComponent/>
            </div>
        )
    }
}
