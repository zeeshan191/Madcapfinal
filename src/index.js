import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/Common/ScrollToTop';


ReactDOM.render( <>
<BrowserRouter>

      <App />
      <ScrollToTop />
</BrowserRouter>
</>,


  document.getElementById('root')
); 