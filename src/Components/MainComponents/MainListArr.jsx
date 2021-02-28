import React from "react";
import HorizontalScroller from "react-horizontal-scroll-container";
import arr from "./ImageArr";
import MainListItem from "./MainListItem";

const MainListArr = () =>{

    return(
        <HorizontalScroller
            sensibility={100}>
            <div className="container"
                 style={{
                     display : "flex",
                    flexDirection : "row",
                    justifyContent : "center",
                    alignItems : "center"
                    }}>
                {
                    arr.map((item, index)=>{
                        return(
                            <MainListItem 
                                key={index}
                                url={item}
                            />
                        )
                    })
                }
            </div>
        </HorizontalScroller>
    )
};

export default MainListArr;