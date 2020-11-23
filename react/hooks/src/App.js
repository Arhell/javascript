import React, {useState} from 'react'
import Main from "./Main";
import Alert from "./Alert";
import './App.css';

export const AlertContext = React.createContext()

function App() {

  const [alert, setAlert] = useState(false)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert}>
      <Alert />
      <Main toggle={toggleAlert}/>
    </AlertContext.Provider>
  );
}

export default App;
