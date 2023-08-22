import React, { useEffect } from "react";
import "../assests/styles.scss";
import { useSelector } from "react-redux";
import ListComponent from "./components/list-component";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import TitleContainer from "./components/title-container/titleContainer";
import useLocalStorage from "./hook/useLocalStorage";

const App = () => {
  const state = useSelector((state) => state);
  const [listState, setListState] = useLocalStorage("list", state);

  useEffect(() => {
    setListState(state);
  }, [state]);

  let listItemArray = listState.list;
  let titleArray = listState.title;

  return (
    <div className="containerWrapper">
      <div className="mainContainer">
        <NavBar />
        <div className="mainContainerBody">
          <SideBar />
          <div className="wrapper">
            <span className="titleWrapper">
              <TitleContainer />
            </span>
            {titleArray?.map((value) => (
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
