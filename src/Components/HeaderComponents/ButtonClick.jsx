import React from "react";

const ButtonClick =({onPress, testTitle, iconUrl})=>{
    return(
        <button onClick={onPress}>
            <span>{testTitle}</span>
        </button>
    );
};

export default ButtonClick;