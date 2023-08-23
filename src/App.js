import React, { useEffect, useState } from "react";
import "../assests/styles.scss";
import { useSelector } from "react-redux";
import ListComponent from "./components/list-component";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import TitleContainer from "./components/title-container/titleContainer";
import useLocalStorage from "./hook/useLocalStorage";

const App = () => {
  const state = useSelector((state) => state);
  const [listState, setListState] = useLocalStorage("toDoLists", state);
  const [searchValue, setSearchValue] = useState("");
  const [titlesArray, setTitleArray] = useState([...listState.titles]);

  useEffect(() => {
    setListState(state);
  }, [state]);

  useEffect(() => {
    setTitleArray((titlesArray) => [...listState.titles]);
  }, [listState]);

  useEffect(() => {
    const filterArray = listState.titles.filter((arrayValue) =>
      arrayValue.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setTitleArray((titlesArray) => [...filterArray]);
  }, [searchValue]);

  return (
    <div className="containerWrapper">
      <div className="mainContainer">
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="mainContainerBody">
          <SideBar />
          <div className="wrapper">
            <span className="titleWrapper">
              <TitleContainer />
            </span>
            {titlesArray?.map((value) => (
              <ListComponent
                id={value.id}
                listItemArray={value.listValue}
                title={value.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
