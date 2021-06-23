import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <HeaderComponent/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 pr-0">
                            <NavigationComponent/>
                        </div>
                        <div className="col-8 pl-0">
                            <ContentComponent/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <FooterComponent/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
