import React, { useState } from "react";
import IconTab from "../icon-tab";
import ListItem from "../list-item";
import DeleteIcon from "../../../assests/icons/delete.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/listActions";

const ListComponent = ({ IconArray, listItemArray, ind, handleDeleteTodo }) => {

  const [currentItem, setCurrentItem] = useState("");
  const dispatch = useDispatch();

  const handleListInput = (e) => {
    setCurrentItem((currentItem) => e.target.value);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter" && currentItem.length>0) {
      dispatch(addItem({ value: currentItem, checkbox: false, id: index }));
      setCurrentItem("");
    }
  };

  return (
    <div className="listContainer">
      <div className="listNavBar">
        {/* {IconArray?.map((value) => (
          <IconTab imgUrl={value.src} />
        ))} */}
        <h2>{`To Do List ${ind + 1}`}</h2>
        {ind > 0 && (
          <button
            onClick={() => {
              handleDeleteTodo(ind);
            }}
          >
            <img src={DeleteIcon}></img>
          </button>
        )}
      </div>
      <div className="listBody">
        {listItemArray[ind]?.map((value, index, arr) => (
          <ListItem content={value} index={index} toDoIndex={ind} array={arr} />
        ))}
        <input
          onChange={handleListInput}
          value={currentItem}
          onKeyDown={(e) => handleKeyPress(e, ind)}
        ></input>
      </div>
    </div>
  );
};

export default ListComponent;
