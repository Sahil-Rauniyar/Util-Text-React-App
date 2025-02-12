// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// utiltext projects 1 (sahil) ;
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // dark on or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  // const [modeName, setModeName] = useState('Enable light-Mode');
  // const modeNameCheck =()=>{
  //   if(mode === 'Enable light-Mode'){
  //     setModeName("Enable Dark-Mode")
  //   }
  //   else{
  //     setMode("Enable light-Mode");
  //   }
  // }
  //arrow function created by sahil ;
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(()=>{
      //   document.title="Created by: Sahil Rauniyar";
      // }, 2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils Now ! ";
      // }, 1500);
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled ", "Success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Navbar AboutUs="About-Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* i replace the switch keyword with the (routes) because we use the 
              updated engine like : v6 so in v6 switch is replaced with routes; */}
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze " mode={mode} />} />
        </Routes>
 
      </div>
    </>

  );
}

export default App;
