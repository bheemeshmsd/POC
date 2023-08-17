import React from "react";

const listIconBuilder = (Component, data = []) => {
    return function wrapper(props) {
        return (<div style={{height:"100%",width:"100%"}}>{
            data?.map((value, index) => <><p>{index}</p></>)
        }</div>)
    }
}

export default listIconBuilder;