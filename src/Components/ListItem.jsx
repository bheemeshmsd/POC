import React from "react";
import { updateItem ,deleteItem} from "../redux/actions/listActions";
import { useSelector, useDispatch } from "react-redux";
import deleteIcon from "../../assests/icons/remove.png";

const ListItem = ({ content, index }) => {

    let list = useSelector((state) => state.list);
    const dispatch = useDispatch();


    const handleCheckBox = (e) => {
        dispatch(updateItem({index:index,checked:e.target.checked}));
    }

    const handleDelete = () =>{
        dispatch(deleteItem(index));
    }

    return (<div className="listItem">
        <input type="checkbox" onChange={handleCheckBox}  checked={content.checkbox} ></input>
        {
            content?.checkbox ? <h3 className="strike">{content.value}</h3> : <h3>{content.value}</h3>
        }
        <button onClick={handleDelete}><img src={deleteIcon}></img></button>
    </div>)
}

export default ListItem;