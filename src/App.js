import React, { useEffect, useState } from "react";
import '../assests/styles.scss';
import listIconBuilder from "./Components/listIconBuilder";
import list from "../assests/icons/list.png";
import todo from "../assests/icons/todo.png";
import ListItem from "./Components/ListItem";
import IconTab from "./Components/IconTab";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/actions/listActions";
import AddIcon from '../assests/icons/add.png';

const navBarList = listIconBuilder(IconTab, [list, todo]);

const IconArray = [{ src: list, tab: "list" }, { src: todo, tab: "todo" }];

// let listItemArray = [{value:"test1",checkbox:false},{value:"test2",checkbox:false},{value:"test2",checkbox:false}];

const App = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    let listItemArray = state.list;


    const handleCurrentTab = (tab) => {
        console.log(tab);
        setCurrentTab((currentTab) => tab);
    }

    const handleModal = () => {
        setModal((modalActive) => true)
    }

    const handleListImput = (e) => {
        console.log(e.target.value);
        setCurrentItem((currentItem) => e.target.value);
    }

    const handleClose = () =>{
        setModal(false);
        setCurrentItem("");
    }

    const handleInputSubmit = () => {
        dispatch(addItem({ value: currentItem, checkbox: false }))
        setModal(false);
        setCurrentItem("");
    }

    const [currentTab, setCurrentTab] = useState('list');
    const [modalActive, setModal] = useState(false);
    const [currentItem, setCurrentItem] = useState('');


    return (<div className="containerWapper">
        <div className="mainContainer">
            <div className="wrapper">
                <div className="listContainer">
                    <div className="listNavBar">
                        {
                            IconArray?.map((value) => <IconTab imgUrl={value.src} handleTab={() => handleCurrentTab(value.tab)} />)
                        }
                    </div>

                    {
                        currentTab === 'list' ?
                            <div className="listBody">
                                {
                                    listItemArray.map((value, index, arr) => <ListItem content={value} index={index} array={arr} />)
                                }
                            </div> : <div><h3>No List</h3></div>}
                </div>

                <button className="addListButton" onClick={handleModal}>
                    <img src={AddIcon}></img>
                </button>
            </div>
        </div>

        <div className={modalActive ? "modalContainer" : "modalContainerRemove"}>
            <section className="modalContent">
                <div className="modalNavBar"><button onClick={handleClose}>Close</button></div>

                <div className="modalBody">
                    <input value={currentItem} onChange={handleListImput}></input>
                    <button onClick={handleInputSubmit}>Submit</button>
                </div>
            </section>
        </div>
    </div>
    )
}

export default App
