import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Setup redux
import { store } from './redux/configStore';
import { Provider } from "react-redux";


//Nhận vào 2 tham số
ReactDOM.render(
  // Là file chạy chính, nhận từ file App.js // Vì render React CHỈ NHẬN 1 thẻ
  //   ở tham số 1
  <Provider store={store}>
    
    <App />
  
  </Provider>,
  // Tham số 1: những gì muốn hiện ra giao diện // viết các đối tượng theo
  //   react phiên dịch từ js sang html
  // <div>Hello BC08</div>
  // Tham số thứ 2: thể hiện ra giao diện qua root
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
