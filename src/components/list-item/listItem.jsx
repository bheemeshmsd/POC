import React from "react";
import { updateItem, deleteItem } from "../../redux/actions/listActions";
import { useDispatch } from "react-redux";
import deleteIcon from "../../../assests/icons/remove.png";
import PropTypes from "prop-types";

const ListItem = ({ content, toDoIndex }) => {
  const dispatch = useDispatch();

  const handleCheckBox = (e) => {
    dispatch(
      updateItem({
        listId: content.listId,
        checked: e.target.checked,
        id: toDoIndex,
      })
    );
  };
  const handleDelete = () => {
    dispatch(deleteItem({ id: toDoIndex, listId: content.listId }));
  };

  return (
    <div title="list-container" className="listItem" key={toDoIndex}>
      <input
        type="checkBox"
        onChange={handleCheckBox}
        checked={content.checkBox}
        title="checkBox"
      ></input>
      <h3 title="listValue" className={content?.checkBox ? "strike" : ""}>
        {content.value}
      </h3>
      {/* <button onClick={handleDelete}>
        <img src={deleteIcon}></img>
      </button> */}
    </div>
  );
};

ListItem.prototype = {
  content: PropTypes.object,
  index: PropTypes.number,
  toDoIndex: PropTypes.number,
};

export default ListItem;
