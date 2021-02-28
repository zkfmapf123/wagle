import React from "react";

const MainDescription = ({first, secound, thrid})=>{
    return(
        <div className="container"
             style={{
                 display : "flex",
                 flexDirection : "column",
                 justifyContent : "center",
                 alignItems : "center"
             }}>
            <h1>{first}</h1>
            <h1>{secound}</h1>
            <h1>{thrid}</h1>
        </div>
    );
};

export default MainDescription;