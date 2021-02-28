import React from "react";
import ImageChanger from "../../Components/HeaderComponents/ImageChanger";
import { color } from "../../Libraries/Color";
import "./Header.css";
import arr from "../../Components/MainComponents/ImageArr";
import { useState } from "react";
import ButtonClick from "../../Components/HeaderComponents/ButtonClick";

const Header = ({onPressDescription, onPressList, onPressLocation}) =>{
    let [idx, setIdx] = useState(0);

    const swapLeftClick = () =>{
        if(idx === 0) setIdx(arr.length-1);
        else setIdx(--idx);
    }

    const swapRightClick=()=>{
        if(idx === arr.length-1) setIdx(0);
        else setIdx(++idx);
    }

    return(
        <div className="container">
            <div className="title-column">
                <h1 id="logo" 
                    style={{color : `${color.header_title_logo_color}`}}>와글와글 솔방울 공방</h1>
            </div>
            <div className="button-column">
                <div className="button-column-background"
                    style={{backgroundColor : `${color.header_button_background_color}`}}>

                </div>
                <div className="button-column-contents">
                    <div className="button-column-picture">
                        <ButtonClick testTitle="왼쪽" onPress={()=>swapLeftClick()}/>
                        <ImageChanger url={arr[idx]}/>
                        <ButtonClick testTitle="오른쪽" onPress={()=>swapRightClick()}/>
                    </div>
                    <div className="button-columns">
                        <a href={onPressDescription}>Description</a>
                        <a href={onPressList}>List</a>
                        <a href={onPressLocation}>Location</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;