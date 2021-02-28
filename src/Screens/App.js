import React from "react";
import './App.css';
import Footer from './Footers/Footer';
import Header from './Headers/Header';
import Main from './Mains/Main';

function App() {
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

export default App;
