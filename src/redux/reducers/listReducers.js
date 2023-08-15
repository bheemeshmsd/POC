import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM ,ADD_ARRAY } from "../actions/actionType";

const initialState = {
  list: [[]],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ARRAY :
            return{
                ...state,
                list:[...state.list,[]]
            }
    case ADD_ITEM:
        console.log(action.payload)
      return {
        ...state,
        list: state.list.map((subArray, ind) => ind === action.payload.id ? [...subArray, action.payload] : subArray)
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.payload),
          ...state.list.slice(action.payload + 1),
        ],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map((value, ind) => {
          if (ind === action.payload.index) {
            return {
              ...value,
              checkbox: action.payload.checked,
            };
          }
          return value;
        }),
      };
    default:
      return state;
  }
};
