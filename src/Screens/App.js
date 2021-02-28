import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';
import Footer from './Footers/Footer';
import Header from './Headers/Header';
import Main from './Mains/Main';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);

  if(loading){
    return(
      <div className="login-container">
        <h1>와글와글 공방에 오신걸 환영합니다</h1>
        <h3>조금만 기다려주세요</h3>
      </div>
    )
  }else{
    return (
      <div className="container">
        <div className="header">
          <Header 
                onPressDescription={"#description"}
                onPressList={"#list"}
                onPressLocation={"#location"}/>
                
        </div>
        <div className="main">
          <Main/>
        </div>
        <div id="location" className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
