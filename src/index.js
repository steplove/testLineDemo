import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import liff from '@line/liff';

const root = ReactDOM.createRoot(document.getElementById('root'));
liff.init({ liffId: '2000414649-29Q1LMp4' }).then(() => {
  // ตรวจสอบสถานะการเข้าสู่ระบบ
  if (!liff.isLoggedIn()) {
    liff.login();
  }
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
