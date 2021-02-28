import React from "react";
import Map from "../../Assets/map.png";
import "./Footer.css";

const Footer = () =>{
    
    return(
        <div className="container">
            <div className="map-column">
                <img src={Map} alt=""
                     style={{marginBottom : "50px"}}/>
                <h1> 찾아오시는 길 : 서구 신현동 527-27호 대림상가 1층 와글와글 솔방을공방</h1>
                <h1> 카카오톡 오픈채팅방 : zkfmapf123@naver.com </h1> 
            </div>
        </div>
    )
};

export default Footer;