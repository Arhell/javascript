import React from 'react'
import Main from "./Main";
import Alert from "./alert/Alert";
import './App.css';
import {AlertProvider} from "./alert/AlertContext";

function App() {

  return (
    <AlertProvider>
      <Alert />
      <Main toggle={() => {}}/>
    </AlertProvider>
  );
}

export default App;
