import React , {useState} from "react";

const ListItem = ({content,index}) =>{
    
    return(<div className="listItem">
       <input type="checkbox" onChange={(e)=>{
       }} ></input>
       <h3>{content.value}</h3>
    </div>)
}

export default ListItem;