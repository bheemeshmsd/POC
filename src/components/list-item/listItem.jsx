import React from "react";
import { updateItem, deleteItem } from "../../redux/actions/listActions";
import { useDispatch } from "react-redux";
import deleteIcon from "../../../assests/icons/remove.png";
import PropTypes from "prop-types";

const ListItem = ({ content, index, toDoIndex }) => {
  const dispatch = useDispatch();

  const handleCheckBox = (e) => {
    dispatch(updateItem({ index, checked: e.target.checked, toDoIndex }));
  };


  const handleDelete = () => {
    dispatch(deleteItem({ index, toDoIndex }));
  };

  

  return (
    <div title="list-container" className="listItem" key={toDoIndex}>
      <input
        type="checkbox"
        onChange={handleCheckBox}
        checked={content.checkbox}
        title="checkbox"
      ></input>
      <h3 title="listValue" className={content?.checkbox ? "strike" : ""}>{content.value}</h3>
      <button onClick={handleDelete}>
        <img src={deleteIcon}></img>
      </button>
    </div>
  );
};

ListItem.prototype = {
  content: PropTypes.object,
  index: PropTypes.number,
  toDoIndex: PropTypes.number,
};

export default ListItem;
