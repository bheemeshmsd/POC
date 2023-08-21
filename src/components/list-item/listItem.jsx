import React from "react";
import { updateItem, deleteItem } from "../../redux/actions/listActions";
import { useSelector, useDispatch } from "react-redux";
import deleteIcon from "../../../assests/icons/remove.png";
import PropTypes from "prop-types";

const ListItem = ({ content, index, toDoIndex }) => {
  let list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleCheckBox = (e) => {
    dispatch(updateItem({ index, checked: e.target.checked, toDoIndex }));
  };

  // const generateRandomId = () => {
  //     const timestamp = new Date().getTime();
  //     const random = Math.random().toString(36).substring(2);
  //     return `${timestamp}_${random}`;
  // }

  const handleDelete = () => {
    dispatch(deleteItem({ index, toDoIndex }));
  };

  // const randomId = generateRandomId();

  return (
    <div className="listItem">
      <input
        type="checkbox"
        onChange={handleCheckBox}
        checked={content.checkbox}
      ></input>
      {content?.checkbox ? (
        <h3 className="strike">{content.value}</h3>
      ) : (
        <h3>{content.value}</h3>
      )}
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
