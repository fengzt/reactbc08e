import React, { Component } from "react";

export default class BodyComponent extends Component {
  glassessArray = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 1. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 2. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 3. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 4. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 5. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 6. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 7. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 8. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 9. ",
    },
  ];

  state = {
    imgSrc: this.glassessArray[0].url,
    name: this.glassessArray[0].name,
    desc: this.glassessArray[0].desc,
  };

  handleGlassess = (number) => {
    this.setState({
      imgSrc: `./img/glassesImage/v${number}.png`,
      name: this.glassessArray[number - 1].name,
      desc: this.glassessArray[number-1].desc
    }, () => {
      console.log(this.glassessArray[number - 1].name);
    })
  };

  renderGlassess = () =>{
    let content = this.glassessArray.map((glass, index) => {
      return (
        <img
          src={glass.url}
          style={{
            outline: "1px solid black",
            width: "12%",
            margin: "1.25rem",
            cursor: "pointer",
          }}
          onClick={() => {
            this.handleGlassess(index+1)
          }}
        />
      );
    })
    return content;
  }

  render() {
    return (
      <div className="glassess">
        <img
          src="./img/glassesImage/background.jpg"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: "1",
          }}
        />
        <div style={{ padding: "5.5rem 0rem 0.5rem" }} className="container">
          <div className="row">
            <div className="col-6 text-center">
              <img
                style={{ position: "relative", zIndex: "2" }}
                src="./img/glassesImage/model.jpg"
                className="w-50"
              />
              <img
                src={this.state.imgSrc}
                style={{
                  width: "25%",
                  position: "absolute",
                  top: "25%",
                  left: "37.5%",
                  opacity: "0.8",
                  zIndex: "2",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  opacity: "0.75",
                  zIndex: "3",
                  background: "#fdbd8f",
                  bottom: "0%",
                  left: "26.2%",
                  width: "47.5%",
                  textAlign: "left",
                  paddingLeft: "0.3rem",
                }}
              >
                <h5 style={{ color: "#9e7ad8", margin: "5px 0px" }}>
                  {this.state.name}
                </h5>
                <p className="text-white">{this.state.desc}</p>
              </div>
            </div>
            <div className="col-6 text-center">
              <img
                style={{ position: "relative", zIndex: "2" }}
                src="./img/glassesImage/model.jpg"
                className="w-50"
              />
            </div>
          </div>

          <div
            className="bg-white"
            style={{
              margin: "2rem 5rem 1rem",
              padding: "2rem",
              position: "relative",
              zIndex: "2",
            }}
          >
            {this.renderGlassess()}
          </div>
        </div>
      </div>
    );
  }
}
