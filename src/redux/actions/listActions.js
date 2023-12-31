import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ADD_TITLE,
  DELETE_TITLE,
  UPDATE_TITLE,
} from "./actionType";

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};


export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};



export const updateItem = (payload) => {
  return {
    type: UPDATE_ITEM,
    payload,
  };
};

export const addTitle = (payload) => {
  return {
    type: ADD_TITLE,
    payload,
  };
};

export const deleteTitle = (payload) => {
  return {
    type: DELETE_TITLE,
    payload,
  };
};

export const updateTitle = (payload) => {
  return {
    type: UPDATE_TITLE,
    payload,
  };
};
