import React, { useState } from "react";
import IconTab from "../icon-tab";
import ListItem from "../list-item";
import DeleteIcon from "../../../assests/icons/delete.png";
import { useDispatch } from "react-redux";
import {
  addItem,
  addArray,
  deleteArray,
  deleteTitle,
} from "../../redux/actions/listActions";

const ListComponent = ({ listItemArray, ind, title }) => {
  const [currentItem, setCurrentItem] = useState("");
  const dispatch = useDispatch();

  const handleDeleteTodo = (index) => {
    dispatch(deleteTitle({ index }));
    dispatch(deleteArray({ index }));
  };

  const handleListInput = (e) => {
    setCurrentItem((currentItem) => e.target.value);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter" && currentItem.length > 0) {
      dispatch(addArray());
      dispatch(addItem({ value: currentItem, checkbox: false, id: index }));
      setCurrentItem("");
    }
  };

  return (
    <div className="listContainer">
      <div className="listNavBar">
        <h2>{title}</h2>
        <button
          onClick={() => {
            handleDeleteTodo(ind);
          }}
        >
          <img src={DeleteIcon}></img>
        </button>
      </div>
      <div className="listBody">
        {listItemArray[ind]?.map((value, index, arr) => (
          <ListItem content={value} index={index} toDoIndex={ind} array={arr} />
        ))}
        <input
          onChange={handleListInput}
          value={currentItem}
          onKeyDown={(e) => handleKeyPress(e, ind)}
          placeholder="Add a list..."
        ></input>
      </div>
    </div>
  );
};

export default ListComponent;
