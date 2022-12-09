import './App.css';
import React, {useState} from 'react';
import { NativeRouter } from "react-router-native";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ForgotPwd from "./ForgotPwd";
import Checkouts from './Checkouts';
import Login from './Login';
import SignUp from './SignUp';

function App() {

  //For Show/Hide Login 
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  
  return (
    <NativeRouter>
      <div className="App">
      {/* This is Amazon Clone */}
      <Header/>
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
  );
}

export default App;
