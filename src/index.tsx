import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.tsx';
import reportWebVitals from './reportWebVitals';

// Kiểm tra nếu người dùng đang truy cập từ thiết bị di động
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Nếu người dùng đang truy cập từ thiết bị di động, hiển thị thông báo
if (isMobile) {
  alert("Tể hãy mở trên máy tính vì đt chồng chưa kịp làm huhu");
}

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
reportWebVitals();
