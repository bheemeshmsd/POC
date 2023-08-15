import { ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,ADD_ARRAY,DELETE_ARRAY} from "./actionType";

export const addItem = (payload) =>{
    return{
        type:ADD_ITEM,
        payload
    }
}

export const addArray = () =>{
    return{
        type:ADD_ARRAY
    }
}

export const deleteItem = (payload) =>{
    return{
        type:DELETE_ITEM,
        payload
    }
}

export const deleteArray = (payload) =>{
    return{
        type:DELETE_ARRAY,
        payload
    }
}

export const updateItem = (payload) =>{
    return{
        type:UPDATE_ITEM,
        payload
    }
}