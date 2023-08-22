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

const listState = JSON.parse(localStorage.getItem("list"));

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
      return {
        ...state,
        title: state.title.map((arrValue) =>
          arrValue.id === action.payload.id
            ? {
                ...arrValue,
                listValue: [
                  ...arrValue.listValue,
                  {
                    value: action.payload.value,
                    checkBox: action.payload.checkBox,
                    listId: action.payload.listId,
                  },
                ],
              }
            : arrValue
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        title: state.title.map((arrValue) =>
          arrValue.id === action.payload.id
            ? {
                ...arrValue,
                listValue: arrValue.listValue.filter(
                  (value) => value.listId !== action.payload.listId
                ),
              }
            : subArray
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        title: state.title.map((arrValue) => {
          if (arrValue.id === action.payload.id) {
            const updatedList = arrValue.listValue.map((value) =>
              value.listId === action.payload.listId
                ? {
                    ...value,
                    checkBox: action.payload.checked,
                  }
                : value
            );
            console.log(updatedList);
            return {
              ...updatedList,
              listValue: [
                ...updatedList.filter((value) => !value.checkBox),
                ...updatedList.filter((value) => value.checkBox),
              ],
            };
          } else {
            return arrValue;
          }
        }),
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
        title: state.title.filter((value) => value.id !== action.payload.id),
      };

    case UPDATE_TITLE:
      return {
        ...state,
        title: state.title.map((value) =>
          action.payload.id === value.id
            ? { ...value, title: action.payload.updateValue }
            : value
        ),
      };

    default:
      return state;
  }
};
