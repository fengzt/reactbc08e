import React, { Component } from "react";

export default class StateDemo extends Component {
  /*
    Thuộc tính state
        + Là thuộc tính có sẵn của rcc - react class component
        + Dùng để chứa giá trị thay đổi trên giao diện khi người dùng thao tác (click, keyup, keydown, blur,...)

  */

  state = {
    isLogin: false,
    fSize: 15,
    imgSrc: "./img/CarBasic/products/red-car.jpg",
  };

  //isLogin = false; => btn Đăng nhập
  //isLogin = true; => hello Feng

  username = "Feng";

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <span className="font-weight-bold text-white">
          Helo {this.username}
        </span>
      );
    }
    return (
      <button
        className="btn btn-outline-success"
        onClick={() => {
          this.handleLogin();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  handleLogin = async () => {
    // this.state.isLogin = true; => không được gán giá trị trực tiếp, sẽ phải thông qua phương thức setState
    /*
        this.setState(newState):
            + Phương thức này do rcc cung cấp, dùng để thay đổi giá trị state;
            + setState được gọi ra thì giao diện sẽ được render lại (hàm render chạy lại)
            + Là phương thức bất đồng bộ: vì phải làm 2 việc: thay đổi giá trị state và load lại render
            + clg vẫn ra giá trị cũ của state
    */

    //C1
    // let newState = {
    //   isLogin: true,
    // };
    // () => {
    //   console.log(this.state.isLogin);
    // };

    // Thay đổi giá trị state và render lại giao điện
    // C2a gán giá trị mới của state sau khi render, nhờ async - await
    await this.setState({
      isLogin: true,
    });

    console.log(this.state.isLogin);

    // this.setState(newState);

    //C2 set lại giá trị của state để thực hiện render
    //C1a : gán giá trị mới của state sau khi render, nhờ tham số callback của setState
    // this.setState(
    //   {
    //     isLogin: true,
    //   },
    //   () => {
    //     console.log(this.state.isLogin);
    //   }
    // );
  };

  handleChangeColor = (color) => {
    this.setState({
      // đi theo đường dẫn của public, vì code show lên sẽ chạy về index.html
      imgSrc: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };

  render() {
    //b4-navbar-background
    // Dùng data binding để gọi các thuộc tính và phương thức
    return (
      <div>
        <div classname="container">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                {/* {this.isLogin ? (
                  <span className="font-weight-bold text-white">
                    Helo {this.username}
                  </span>
                ) : (
                  <button className="btn btn-outline-success">Đăng nhập</button>
                )} */}
                {this.renderLogin()};
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <h3>Bài tập tăng giảm font chữ</h3>
          <p style={{ fontSize: `${this.state.fSize}px` }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            modi accusamus dolor illo, laboriosam vero sint odio praesentium
            perspiciatis eligendi aperiam nihil possimus velit exercitationem
            debitis deserunt. Commodi, optio enim. Enim dolore ipsam totam
            minima est perferendis, sed voluptatum labore quisquam temporibus
            asperiores esse eius molestias in minus nemo ab culpa tenetur facere
          </p>

          <button
            className="btn btn-outline-danger mr-2"
            onClick={() => {
              this.setState({ fSize: this.state.fSize + 2 });
            }}
          >
            +
          </button>
          <button
            className="btn btn-outline-danger mr-2"
            onClick={() => {
              //   this.setState({ fSize: this.state.fSize - 2 });
              let newFontSize = this.state.fSize - 2;
              this.setState({
                fSize: newFontSize,
              });
            }}
          >
            -
          </button>
        </div>
        <div className="container">
          <h3>Bài tập chọn xe</h3>
          <div className="row">
            <div className="col-6">
              <img src={this.state.imgSrc} className="w-100" />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <button
                    style={{ background: "red" }}
                    className="btn text-white"
                    onClick={() => {
                      this.handleChangeColor("red");
                    }}
                  >
                    Red
                  </button>
                </div>
                <div className="col-3">
                  <button
                    style={{ background: "silver" }}
                    className="btn text-white"
                    onClick={() => {
                      this.handleChangeColor("silver");
                    }}
                  >
                    Silver
                  </button>
                </div>
                <div className="col-3">
                  <button
                    style={{ background: "black" }}
                    className="btn text-white"
                    onClick={() => {
                      this.handleChangeColor("black");
                    }}
                  >
                    Black
                  </button>
                </div>
                <div className="col-3">
                  <button
                    style={{ background: "gray" }}
                    className="btn text-white"
                    onClick={() => {
                      this.handleChangeColor("steel");
                    }}
                  >
                    Steel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
