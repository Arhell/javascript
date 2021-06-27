// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

