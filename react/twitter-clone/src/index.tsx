// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

