import React from "react";
import PropTypes from 'prop-types';

const IconTab = ({imgUrl,handleTab}) => {
    return (<div className='listIconContainer' onClick={handleTab}>
            <img src={imgUrl}></img>
    </div>)
}

IconTab.prototype={
    imgUrl : PropTypes.string,
    handleTab: PropTypes.func
}

export default IconTab;