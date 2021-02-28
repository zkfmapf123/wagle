import React from "react";
import MainDescription from "../../Components/MainComponents/MainDescriptoin";
import MainListArr from "../../Components/MainComponents/MainListArr";
import "./Main.css";

const Main = () =>{
    return(
        <div className="container">
            <div id="description">
                <MainDescription
                    first={"테스트구문1"}
                    secound={"테스트구문2"}
                    thrid={"테스트구문3"}
                />
            </div>
            <div id="list">
                <MainListArr/>
            </div>
        </div>  
    )
};

export default Main;