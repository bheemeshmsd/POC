import { ADD_ITEM,DELETE_ITEM,UPDATE_ITEM} from "./actionType";

export const addItem = (payload) =>{
    return{
        type:ADD_ITEM,
        payload
    }
}

export const deleteItem = (payload) =>{
    return{
        type:DELETE_ITEM,
        payload
    }
}

export const updateItem = (payload) =>{
    return{
        type:UPDATE_ITEM,
        payload
    }
}