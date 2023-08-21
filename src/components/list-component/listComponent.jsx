import React, { useState, useEffect } from "react";
import ListItem from "../list-item";
import DeleteIcon from "../../../assests/icons/delete.png";
import { useDispatch } from "react-redux";
import {
  addItem,
  addArray,
  deleteArray,
  deleteTitle,
  updateTitle,
} from "../../redux/actions/listActions";

const ListComponent = ({ listItemArray, ind, title }) => {
  const [currentItem, setCurrentItem] = useState("");
  const [edit, setEdit] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const dispatch = useDispatch();

  const handleDeleteTodo = (index) => {
    dispatch(deleteTitle({ index }));
    dispatch(deleteArray({ index }));
  };

  const handleListInput = (e) => {
    setCurrentItem((currentItem) => e.target.value);
  };

  const handleTitleInput = (e) => {
    setCurrentTitle((currentTitle) => e.target.value);
  };

  const handleTitleKeyPress = (e) => {
    if (e.key === "Enter" && currentTitle.length > 0) {
      dispatch(updateTitle({ updateValue: currentTitle, index: ind }));
      removeEdit();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && currentItem.length > 0) {
      dispatch(addArray());
      dispatch(addItem({ value: currentItem, checkbox: false, id: ind }));
      setCurrentItem("");
    }
  };

  const removeEdit = () => {
    setEdit((edit) => false);
  };

  const handleEdit = () => {
    setEdit((edit) => true);
  };

 
  return (
    <div className="listContainer">
      <div className="listNavBar">
        {edit ? (
          <input
            value={currentTitle}
            onChange={handleTitleInput}
            onKeyDown={handleTitleKeyPress}
          />
        ) : (
          <h2 onClick={handleEdit}>{title}</h2>
        )}
        <button
          onClick={() => {
            handleDeleteTodo(ind);
          }}
        >
          <img src={DeleteIcon}></img>
        </button>
      </div>
      <div className="listBody" onClick={removeEdit}>
        {listItemArray?.map((value, index, arr) => (
          <ListItem content={value} index={index} toDoIndex={ind} />
        ))}
        <input
          onChange={handleListInput}
          value={currentItem}
          onKeyDown={handleKeyPress}
          placeholder="Add a list..."
        ></input>
      </div>
    </div>
  );
};

export default ListComponent;
