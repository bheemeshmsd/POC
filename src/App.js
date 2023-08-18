import React from "react";
import "../assests/styles.scss";
import { useSelector } from "react-redux";
import ListComponent from "./components/list-component";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import TitleContainer from "./components/title-container/titleContainer";

const App = () => {
  const state = useSelector((state) => state);

  let listItemArray = state.list;
  let titleArray = state.title;

  console.log(state);

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
          
            {titleArray?.map((value, index) => (
              <ListComponent
                ind={index}
                listItemArray={listItemArray}
                title={value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
