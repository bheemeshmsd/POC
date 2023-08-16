import React from "react";
import IconTab from "../IconTab";
import ListInput from "../InputComponent";
import ListItem from "../ListItem";

const ListComponent = ({ IconArray, listItemArray, ind, handleDeleteTodo }) => {
  return (
    <div className="listContainer">
      <div className="listNavBar">
        {IconArray?.map((value) => (
          <IconTab imgUrl={value.src} />
        ))}
        {ind > 0 && (
          <button
            onClick={() => {
              handleDeleteTodo(ind);
            }}
          >
            delete
          </button>
        )}
      </div>

      <div className="listBody">
        {listItemArray[ind]?.map((value, index, arr) => (
          <ListItem content={value} index={index} toDoIndex={ind} array={arr} />
        ))}
        <ListInput index={ind} />
      </div>
    </div>
  );
};

export default ListComponent;
