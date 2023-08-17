import React, { useEffect, useState } from "react";
import "../assests/styles.scss";
import listIconBuilder from "./components/list-icon-builder";
import list from "../assests/icons/list.png";
import todo from "../assests/icons/todo.png";
import IconTab from "./components/icon-tab";
import { useDispatch, useSelector } from "react-redux";
import { addArray, deleteArray } from "./redux/actions/listActions";
import AddIcon from "../assests/icons/add.png";
import ListComponent from "./components/list-component";
const navBarList = listIconBuilder(IconTab, [list, todo]);
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import TitleContainer from "./components/title-container/titleContainer";

const IconArray = [{ src: list, tab: "list" }];

// let listItemArray = [{value:"test1",checkbox:false},{value:"test2",checkbox:false},{value:"test2",checkbox:false}];

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleTodo = () => {
    setToDoListCount((todoListCount) => todoListCount + 1);
    dispatch(addArray());
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteArray({ index: index }));
    setToDoListCount((todoListCount) => todoListCount - 1);
  };

  const [todoListCount, setToDoListCount] = useState(0);
  let listItemArray = state.list;

  //Automatic detetion will attendend this later
  //   useEffect(() => {
  //     // state.list.map((value, index) => {
  //     //   console.log(index, value.length);
  //     //   if (value?.length == 0 && index >0) {
  //     //     dispatch(deleteArray(index));
  //     //   }
  //     // });
  //   }, [state.list]);

  return (
    <div className="containerWapper">
      <div className="mainContainer">
        {/* <button className="addListButton" onClick={handleTodo}>
          <img src={AddIcon}></img>
        </button> */}
        <NavBar />
        <div className="mainContainerBody">
          <TitleContainer/>
          <div className="wrapper">
          <SideBar />
            {Array(todoListCount)
              .fill(0)
              .map((value, index) => (
                <ListComponent
                  ind={index}
                  handleDeleteTodo={handleDeleteTodo}
                  listItemArray={listItemArray}
                  IconArray={IconArray}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
