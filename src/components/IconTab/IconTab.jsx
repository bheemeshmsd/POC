import React from "react";

const IconTab = ({imgUrl,handleTab}) => {

    return (<div className='listIconContainer' onClick={handleTab}>
            <img src={imgUrl}></img>
    </div>)
}

export default IconTab;