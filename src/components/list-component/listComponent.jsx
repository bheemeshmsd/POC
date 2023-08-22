import React, { useState } from "react";
import PropTypes from "prop-types";
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
import { v4 } from "uuid";

const ListComponent = ({ listItemArray, id, title }) => {
  const [currentItem, setCurrentItem] = useState("");
  const [edit, setEdit] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTitle({ id }));
    // dispatch(deleteArray({ index }));
  };

  const handleListInput = (e) => {
    setCurrentItem((currentItem) => e.target.value);
  };

  const handleTitleInput = (e) => {
    setCurrentTitle((currentTitle) => e.target.value);
  };

  const handleTitleKeyPress = (e) => {
    if (e.key === "Enter" && currentTitle.length > 0) {
      dispatch(updateTitle({ updateValue: currentTitle, id }));
      removeEdit();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && currentItem.length > 0) {
      // dispatch(addArray());
      const listId  = v4();
      dispatch(addItem({ value: currentItem, checkBox: false ,id, listId}));
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
    <div className="listContainer" >
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
            handleDeleteTodo(id);
          }}
        >
          <img src={DeleteIcon}></img>
        </button>
      </div>
      <div className="listBody" onClick={removeEdit}>
        {listItemArray?.map((value) => (
          <ListItem content={value} toDoIndex={id} />
        ))}
        <textarea
          onChange={handleListInput}
          value={currentItem}
          onKeyDown={handleKeyPress}
          placeholder="Add a list..."
        ></textarea>
      </div>
    </div>
  );
};

ListComponent.prototype = {
  listItemArray: PropTypes.array,
  id: PropTypes.number,
  title: PropTypes.string,
};

export default ListComponent;
