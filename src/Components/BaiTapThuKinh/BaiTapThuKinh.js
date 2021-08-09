import React, { Component } from "react";
import BodyComponent from "./BodyComponent";
import HeaderComponent from "./HeaderComponent";

export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
      </div>
    );
  }
}
