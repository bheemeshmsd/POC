import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ADD_TITLE,
  DELETE_TITLE,
  UPDATE_TITLE,
} from "../actions/actionType";

const listState = JSON.parse(localStorage.getItem("list"));

const initialState = {
  titles: listState?.titles || [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        titles: state.titles.map((arrValue) =>
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
        titles: state.titles.map((arrValue) =>
          arrValue.id === action.payload.id
            ? {
                ...arrValue,
                listValue: arrValue.listValue.filter(
                  (value) => value.listId !== action.payload.listId
                ),
              }
            : arrValue
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        titles: state.titles.map((arrValue) => {
          if (arrValue.id === action.payload.id) {
            const updatedList = arrValue.listValue.map((value) =>
              value.listId === action.payload.listId
                ? {
                    ...value,
                    checkBox: action.payload.checked,
                  }
                : value
            );
            return {
              ...arrValue,
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
    case ADD_TITLE:
      return {
        ...state,
        titles: [...state.titles, action.payload],
      };
    case DELETE_TITLE:
      return {
        ...state,
        titles: state.titles.filter((value) => value.id !== action.payload.id),
      };
    case UPDATE_TITLE:
      console.log(action.payload);
      return {
        ...state,
        titles: state.titles.map((value) =>
          action.payload.id === value.id
            ? { ...value, title: action.payload.updateValue }
            : value
        ),
      };

    default:
      return state;
  }
};
