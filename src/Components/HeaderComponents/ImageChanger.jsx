import React from "react";

const ImageChanger = ({url}) =>{
    return(
        <img 
            src={url} 
            alt=""
            width="500px"
            height="500px"/>
    )
};

export default ImageChanger;