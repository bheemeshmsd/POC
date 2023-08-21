import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ADD_ARRAY,
  DELETE_ARRAY,
  ADD_TITLE,
  DELETE_TITLE,
  UPDATE_TITLE,
} from "../actions/actionType";


const listState =  JSON.parse(localStorage.getItem('list'));

const initialState = {
  list: listState?.list || [],
  title: listState?.title || [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARRAY:
      return {
        ...state,
        list: [...state.list, []],
      };
    case ADD_ITEM:
      console.log(action.payload);
      return {
        ...state,
        list: state.list.map((subArray, ind) =>
          ind === action.payload.id ? [...subArray, action.payload] : subArray
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.map((subArray, ind) =>
          ind === action.payload.toDoIndex
            ? [
                ...subArray.slice(0, action.payload.index),
                ...subArray.slice(action.payload.index + 1),
              ]
            : subArray
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map((value, ind) =>
          ind === action.payload.toDoIndex
            ? value.map((item, index) =>
                index === action.payload.index
                  ? { ...item, checkbox: action.payload.checked }
                  : item
              )
            : value
        ),
      };

    case DELETE_ARRAY:
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.payload.index),
          ...state.list.slice(action.payload.index + 1),
        ],
      };

    case ADD_TITLE:
      return {
        ...state,
        title: [...state.title, action.payload],
      };

    case DELETE_TITLE:
      return {
        ...state,
        title: [
          ...state.title.slice(0, action.payload.index),
          ...state.title.slice(action.payload.index + 1),
        ],
      };

    case UPDATE_TITLE:
      return {
        ...state,
        title: state.title.map((value, index) =>
          action.payload.index === index ? action.payload.updateValue : value
        ),
      };

    default:
      return state;
  }
};
