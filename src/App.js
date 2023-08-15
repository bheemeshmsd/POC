import React, { useEffect, useState } from "react";
import "../assests/styles.scss";
import listIconBuilder from "./components/listIconBuilder";
import list from "../assests/icons/list.png";
import todo from "../assests/icons/todo.png";
import ListItem from "./components/ListItem";
import IconTab from "./components/IconTab";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addArray, deleteArray } from "./redux/actions/listActions";
import AddIcon from "../assests/icons/add.png";
import DeleteIcon from "../assests/icons/remove.png";
import ListInput from "./components/InputComponent";
const navBarList = listIconBuilder(IconTab, [list, todo]);

const IconArray = [{ src: list, tab: "list" }];

// let listItemArray = [{value:"test1",checkbox:false},{value:"test2",checkbox:false},{value:"test2",checkbox:false}];

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCurrentTab = (tab) => {
    console.log(tab);
  };

  const handleModal = () => {
    setModal((modalActive) => true);
  };

  const handleClose = () => {
    setModal(false);
    setCurrentItem("");
  };

  const handleInputSubmit = () => {
    dispatch(addItem({ value: currentItem, checkbox: false }));
    setModal(false);
    setCurrentItem("");
  };

  const handleTodo = () => {
    setToDoListCount((todoListCount) => todoListCount + 1);
    dispatch(addArray());
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteArray({ index: index }));
    setToDoListCount((todoListCount) => todoListCount - 1);
  };
  const [modalActive, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [todoListCount, setToDoListCount] = useState(1);
  let listItemArray = state.list;

  console.log(listItemArray);

  //Automatic detetion will attendend this later
  useEffect(() => {
    // state.list.map((value, index) => {
    //   console.log(index, value.length);
    //   if (value?.length == 0 && index >0) {
    //     dispatch(deleteArray(index));
    //   }
    // });
  }, [state.list]);

  return (
    <div className="containerWapper">
      <div className="mainContainer">
        <div className="wrapper">
          {Array(todoListCount)
            .fill(0)
            .map((value, ind) => (
              <div className="listContainer">
                <div className="listNavBar">
                  {IconArray?.map((value) => (
                    <IconTab
                      imgUrl={value.src}
                      handleTab={() => handleCurrentTab(value.tab)}
                    />
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
                    <ListItem
                      content={value}
                      index={index}
                      toDoIndex={ind}
                      array={arr}
                    />
                  ))}
                  <ListInput index={ind} />
                </div>
              </div>
            ))}

          <button className="addListButton" onClick={handleTodo}>
            <img src={AddIcon}></img>
          </button>
        </div>
      </div>

      {/* <div className={modalActive ? "modalContainer" : "modalContainerRemove"}>
            <section className="modalContent">
                <div className="modalNavBar"><button onClick={handleClose}>Close</button></div>

                <div className="modalBody">
                    <input value={currentItem} onChange={handleListImput}></input>
                    <button onClick={handleInputSubmit}>Submit</button>
                </div>
            </section>
        </div> */}
    </div>
  );
};

export default App;
