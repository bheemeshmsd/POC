import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTitle } from "../../redux/actions/listActions";

const TitleContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle((title)=>e.target.value)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && title.length>0) {
      dispatch(addTitle(title));
      setTitle("");
    }
  };

  return (
    <div className="titleContainer">
      <input
        placeholder="Enter a title..."
        value={title}
        onChange={handleTitle}
        onKeyDown={handleKeyPress}
      ></input>
    </div>
  );
};

export default TitleContainer;
