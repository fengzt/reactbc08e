import React, { Component } from 'react'

// rcc: tạo react class component
// tạo được 1 lớp đối tượng

export default class ClassComponent extends Component {

    name = 'Feng';

    // Phương thức
    renderABC() {
        
    }

    // Phương thức render là phương thức chứa giao diện của component này
    // Dùng thêm chuột phải: convert HTML to JSX
    render() {
        return (
        <div>
            <nav className="nav justify-content-center">
                <a className="nav-link active" href="#">Active link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" href="#">Disabled link</a>
            </nav>       
        </div>

        )
    }
}
