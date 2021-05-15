import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <>
      <Route exact path = "/" component = {App} />
      <Route exact path = "/Login" component = {Login} />
    </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
