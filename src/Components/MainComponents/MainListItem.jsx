import React from "react";

const MainListItem = ({url})=>{

    return(
        <img 
            id="item-image"
            width={"18%"}
            height={400}
            src={url} 
            alt=""
            style={{
                margin : "10px",
            }}/>
    )
};

export default MainListItem;