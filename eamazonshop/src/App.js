import './CSS/App.css';
import React, {useState} from 'react';
import { NativeRouter } from "react-router-native";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';
// import Header from './Pages/Header';
import Home from './Pages/Home';
import ForgotPwd from "./Pages/ForgotPwd";
import Checkouts from './Pages/Checkouts';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import StateProvider from './Context/StateProvider';

function App() {

  //For Show/Hide Login 
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  
  return (
    <StateProvider>
      <NativeRouter>
        <div className="App">
          {/* <Header/> */}
          <Routes >
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/Home" element = {<Home/>}/>
            <Route path = "/Login" element = {<Login Close = {handleClose} showdata = {show}/>} />
            <Route path = "/SignUp" element = {<SignUp Close = {handleClose} showdata = {show}/>} />
            <Route path = "/Forgot" element = {<ForgotPwd />} />
            <Route path="/Checkout" element = {< Checkouts/>} />
          </Routes>
        </div>
      </NativeRouter>
    </StateProvider>
  );
}

export default App;
