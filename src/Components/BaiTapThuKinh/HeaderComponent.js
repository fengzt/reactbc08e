import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            zIndex:'3'
          }}
          className="contenter-fluid text-white"
        >
          <p
            style={{
              fontSize: "1rem",
              textAlign: "center",
              padding: "1.5rem",
              margin: "0px",
              color: "white"
            }}
          >
            TRY GLASSESS APP ONLINE
          </p>
        </div>
      </div>
    );
  }
}
