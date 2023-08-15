import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/listActions";
const ListInput = ({index}) =>{

  const [currentItem, setCurrentItem] = useState("");
  const dispatch = useDispatch();

  const handleListInput = (e) => {
    console.log(e.target.value);
    setCurrentItem((currentItem) => e.target.value);
  };

    const handleKeyPress = (e,index) => {
        if (e.key === "Enter") {
          dispatch(addItem({ value: currentItem, checkbox: false ,id:index}));
          setCurrentItem("");
        }
      };

    return<input onChange={handleListInput} value={currentItem} onKeyDown={(e)=>handleKeyPress(e,index)}></input>
}

export default ListInput;